from flask import Flask, jsonify, request, render_template
import json
app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template ('Index.html')

@app.route('/Index.html')
def Index():
    return  render_template('Index.html')

@app.route('/form-registro.html')
def registro():
    return render_template ('form-registro.html')

@app.route('/nosotro.html')
def nosotros():
    return render_template ('nosotro.html')

@app.route('/pcontacto.html')
def contacto():
    return render_template ('pcontacto.html')    