from flask import Flask, render_template, request
import logging
from logging import Formatter, FileHandler
import pyate
from pyate import TermExtraction

app = Flask(__name__, template_folder="build", static_folder="build/static")

# te = TermExtraction(TermExtraction.get_general_domain())

MAPPING_NAME_TO_FUNCTION = {
    "cvalues": lambda s, kwargs: pyate.cvalues(s, **kwargs),
    "combo_basic": lambda s, kwargs: pyate.combo_basic(s, **kwargs),
    "basic": lambda s, kwargs: pyate.basic(s, **kwargs),
    "term_extractor": lambda s, kwargs: pyate.term_extractor(s, **kwargs),
    "weirdness": lambda s, kwargs: pyate.weirdness(s, **kwargs),
}

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/ate", methods=["POST"])
def ate():
    kwargs = request.get_json(force=True)
    algo_name = kwargs["algo"]
    text = kwargs["text"]
    del kwargs["algo"], kwargs["text"]
    try:
        func = getattr(pyate, algo_name)
    except Exception as e:
        return {
            "response": [],
            "didSucceed": False,
            "errorMessage": "invalid function name.\n\n " + str(e),
        }, 400
    try:
        result = list(func(text, **kwargs).sort_values(ascending=False).items())
    except Exception as e:
        return {"response": [], "didSucceed": False, "errorMessage": str(e)}, 400
    return {"response": result, "didSucceed": True, "errorMessage": ""}


# boilerplate code from https://github.com/realpython/flask-boilerplate/blob/master/app.py
# @app.errorhandler(500)
# def internal_error(error):
    # return render_template("errors/500.html"), 500


# @app.errorhandler(404)
# def not_found_error(error):
    # return render_template("errors/404.html"), 404


# if not app.debug:
    # file_handler = FileHandler("error.log")
    # file_handler.setFormatter(
        # Formatter("%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]")
    # )
    # app.logger.setLevel(logging.INFO)
    # file_handler.setLevel(logging.INFO)
    # app.logger.addHandler(file_handler)
    # app.logger.info("errors")

if __name__ == "__main__":
    app.run()
