import sqlite3


def registrouser(nuevouser):
    conn = sqlite3.connect('db/login.db')

    crsr = conn.cursor()
    crsr.execute('INSERT INTO users (txt_nombre, txt_apellido, txt_cedula, txt_telefono, txt_direccion, txt_correo, txt_pass, txt_passconfir) VALUES("{}","{}","{}","{}","{}","{}","{}","{}")'
                .format(nuevouser['txt_nombre'], nuevouser['txt_apellido'], nuevouser['txt_cedula'], nuevouser['txt_telefono'], nuevouser['txt_direccion'], nuevouser['txt_correo'], nuevouser['txt_pass'], nuevouser['txt_passconfir']))
    
    conn.commit()
    
    conn.close()