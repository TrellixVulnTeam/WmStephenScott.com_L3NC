import os
import requests
from flask import Flask, render_template, request, flash
from wtforms import Form, StringField, validators
from forms import ContactForm
from gitignore import passwords
#from flask_jsglue import JSGlue

app = Flask(__name__)
app.secret_key = app.config["SECRET_KEY"]
app.config["MAILGUN_KEY"] = passwords.mailgun_key()
app.config['MAILGUN_DOMAIN'] = 'wmstephenscott.com'
app.config["MAIL_USERNAME"] = 'evepiprofits@gmail.com'
#jsglue.init_app(app)
@app.route('/', methods=['GET', 'POST'])
def index():
    error = None

    if __name__ == "__main__":
        print('launching app.run')
        app.run(debug=True, port=os.environ.get('PORT', 5000), use_reloader=False)

    form = ContactForm()

    def send_mail(to_address, from_address, subject, organization, plaintext):
        plaintext = organization + " " + plaintext
        request2 = requests.post("https://api.mailgun.net/v3/%s/messages" % app.config['MAILGUN_DOMAIN'],
                                auth=("api", app.config['MAILGUN_KEY']),
                                data={"from": from_address,
                                    "to": to_address,
                                    "subject": subject,
                                    "text": plaintext,
                                    }
        )
        return request2


    if request.method == 'POST':
        if form.validate() == False:
            #flash('All fields are required.')
            return(render_template('message-failed.html', form=form))
        #flash('Message sent.')
        else:
            try:
                send_mail(app.config["MAIL_USERNAME"],
                          form.email.data,
                          form.subject.data,
                          form.org.data,
                          form.message.data)
                return render_template('message-sent.html', form=form)
            except requests.exceptions.RequestException as e:
                flash(e)

            return(render_template('message-sent.html', form=form))

    elif request.method == 'GET':
        return(render_template('index.html', form=form))

    #return render_template('index.html', form=form)

@app.route('/slick-test')
def slick_test():
    return render_template('slick-test.html')

@app.route('/geo-slideshow')
def geo_slideshow():
    return render_template('geo-slideshow.html')

@app.route('/index2')
def index2():
    return render_template('index2.html')

@app.route('/message_sent')
def message_sent():
    return(render_template('message-sent.html'))

@app.route('/message-fail')
def message_failed():
    return(render_template('message-failed.html'))