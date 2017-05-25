from flask_wtf import Form
from wtforms import TextField, TextAreaField, SubmitField
from wtforms import validators
#from flask.ext.wtf import  ValidationError

class ContactForm(Form):
    name = TextField("Name", [validators.DataRequired("Please enter your name")])
    org = TextField("Organization")
    email = TextField("Email", [validators.DataRequired("Please enter an email address"), validators.email("Please enter a valid email address.")])

    subject = TextField("Subject")
    message = TextAreaField("Message", [validators.DataRequired("Please enter a message")])
    submit = SubmitField("Send")