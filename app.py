from flask import Flask,  jsonify, render_template, request, redirect, url_for, jsonify
from src.db.connect import registrouser
import json
app = Flask(__name__)

@app.route('/')
def Index():
    return  redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method =='POST':
        print (request.form['username'])
        print (request.form['password'])
        return  render_template('Index.html')
    else:
        return  render_template('Index.html')
    
    
@app.route('/formregistro')
def formregistro():
   return  render_template('form-registro.html') 

         
@app.route('/registro', methods=['GET', 'POST'])
def registro():
<<<<<<< HEAD
   if  request.method == 'POST':
        nuevouser = json.loads(request.data.decode('utf_8'))
        registrouser(nuevouser)
        return  render_template('form-registro.html')
        
   else:
        return  render_template('form-registro.html')
=======
    return render_template ('form-registro.html')

@app.route('/nosotro.html')
def nosotros():
    return render_template ('nosotro.html')

@app.route('/pcontacto.html')
def contacto():
    return render_template ('pcontacto.html')
    
@app.route('/p_piloto.html')
def ppiloto():
    return render_template ('p_piloto.html') 

@app.route('/Panel_Control.html')
def PanelControl():
    return render_template ('Panel_Control.html')
    
>>>>>>> 2fc1fd38c4d081ae76e137a579fbc207d7bde28c
