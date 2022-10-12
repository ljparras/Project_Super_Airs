from sre_constants import SUCCESS
from flask import Flask, jsonify, request, render_template, flash, redirect, url_for
from src.db.connect import conn
import sqlite3
app = Flask(__name__)
app.secret_key = 'my_secret_key'

@app.route('/', methods=['GET','POST'])
def inicio():
    
    return render_template ('Index.html')

@app.route('/logeo', methods=['GET','POST'])
def logeo():
    print(request.method)
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        conn = sqlite3.connect('db/superAirs.db')
       
        crsr=conn.cursor()
        crsr.execute('SELECT * FROM registro where Email = "%s"' % (username))
        lista=crsr.fetchone()

        print(lista)
        conn.close()
        if lista == None: 
            success_messaje = "USUARIO NO REGISTRADO"
            flash(success_messaje)
            return render_template ('Index.html')
        if lista[6] == username and lista[7] == password:
            return render_template ('perfiluser.html', lista=lista)
        else:
            success_messaje = "CORREO O CONTRASEÑA INCORRECTOS"
            flash(success_messaje)
            return render_template ('Index.html')
    


@app.route('/nosotros')
def nosotros():
    return render_template ('nosotros.html')

@app.route('/contacto')
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

@app.route('/PanelControl', methods = ['GET','POST'])
def PanelControl():
    if request.method == 'GET':
        conn = sqlite3.connect('db/superAirs.db')
        crsr=conn.cursor()
        crsr.execute("SELECT * FROM piloto")
        lista=crsr.fetchall()
        return render_template('PanelControl.html', lista=lista)

    if request.method == 'POST':
        conn = sqlite3.connect('db/superAirs.db')
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        cedula = request.form['cedula']
        telefono = request.form['telefono']
        direccion = request.form['direccion']
        correo = request.form['correo']
        password = request.form['password']
        
        conn.execute("INSERT INTO piloto (Nombre,Apellido,Cedula,Telefono,Direccion,Correo,Pass) VALUES (?,?,?,?,?,?,?)",
        (nombre,apellido,cedula,telefono,direccion,correo,password))
        conn.commit()
        
        crsr=conn.cursor()
        crsr.execute("SELECT * FROM piloto")
        lista=crsr.fetchall()
        conn.close()
        return render_template ('PanelControl.html', lista=lista) 


@app.route('/perfiluser' , methods = ['GET','POST'])
def perfiluser():
     if request.method == 'GET':
        conn = sqlite3.connect('db/superAirs.db')
        crsr=conn.cursor()
        crsr.execute("SELECT * FROM registro")
        lista=crsr.fetchall()
        return render_template ('perfiluser.html', lista=lista)
 
     if  request.method == 'POST' :
        conn = sqlite3.connect('db/superAirs.db')
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        cedula = request.form['cedula']
        telefono = request.form['telefono']
        direccion = request.form['direccion']
        email = request.form['email']
        
        conn.execute('UPDATE registro SET  Nombre = "%s", Apellido = "%s", Cedula = "%s", Telefono = "%s", Direccion ="%s"   where Email = "%s"' % (nombre, apellido, cedula, telefono, direccion, email))
        
        crsr=conn.cursor()
        crsr.execute("SELECT * FROM registro")
        lista=crsr.fetchall()
        conn.commit()
        conn.close()
        return render_template('perfiluser.html', lista=lista)
    
