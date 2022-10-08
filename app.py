from crypt import methods
from distutils.util import execute
from flask import Flask, jsonify, request, render_template
import json
from src.db.connect import conn
import sqlite3

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template ('Index.html')

@app.route('/Index.html')
def Index():
    return  render_template('Index.html')

@app.route('/nosotro.html')
def nosotros():
    return render_template ('nosotro.html')

@app.route('/pcontacto.html')
def contacto():
    return render_template ('pcontacto.html')
    
@app.route('/registro', methods = ['GET','POST'])
def registro():
    if request.method == 'POST':
        conn = sqlite3.connect('db/superAirs.db')
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        cedula = request.form['cedula']
        telefono = request.form['telefono']
        direccion = request.form['direccion']
        correo = request.form['correo']
        password = request.form['password']
        conn.execute("INSERT INTO registro (Nombre,Apellido,Cedula,Telefono,Direccion,Email,Pass) VALUES (?,?,?,?,?,?,?)",
        (nombre,apellido,cedula,telefono,direccion,correo,password))
        conn.commit()
        conn.close()

    return render_template ('form-registro.html')


@app.route('/listausuarios', methods=['GET'])
def listausuarios():
    if request.method == 'GET':
        conn = sqlite3.connect('db/superAirs.db')
        crsr=conn.cursor()
        crsr.execute("SELECT * FROM registro")
        lista=crsr.fetchall()
    return render_template('listausuario.html',lista=lista)
    
@app.route('/p_piloto.html')
def ppiloto():
    return render_template ('p_piloto.html') 

@app.route('/Panel_Control.html')
def PanelControl():
    return render_template ('Panel_Control.html')
    
