# this file imports custom routes into the experiment server

from flask import Blueprint, render_template, request, jsonify, Response, abort, current_app
from jinja2 import TemplateNotFound
from functools import wraps
from sqlalchemy import or_

from psiturk.psiturk_config import PsiturkConfig
from psiturk.experiment_errors import ExperimentError
from psiturk.user_utils import PsiTurkAuthorization, nocache

# # Database setup
from psiturk.db import db_session, init_db
from psiturk.models import Participant
from json import dumps, loads

# load the configuration options
config = PsiturkConfig()
config.load_config()
myauth = PsiTurkAuthorization(config)  # if you want to add a password protect route use this

# explore the Blueprint
custom_code = Blueprint('custom_code', __name__, template_folder='templates', static_folder='static')



###########################################################
#  serving warm, fresh, & sweet custom, user-provided routes
#  add them here
###########################################################

#----------------------------------------------
# example accessing data
#----------------------------------------------
@custom_code.route('/drawings')
def getdrawings():
    users = Participant.query.all()
    data = [loads(subj.datastring) for subj in users if subj.datastring!=""]
    drawing_data = [loads(d['questiondata']['drawing_json']) for d in data if "drawing_json" in d['questiondata']]
    return jsonify(drawings=drawing_data)

@custom_code.route('/gallery')
@myauth.requires_auth
def viewdrawings():
	try:
		return render_template('showdrawings.html')
	except TemplateNotFound:
		abort(404)

