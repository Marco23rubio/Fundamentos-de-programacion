class Persona:
    edad = 27
    nombre = "victor"
    pais = "brasil"

doctor = Persona()
delattr(Persona,"pais")
print(doctor.pais)
# print(doctor.nombre)
# setattr(doctor,"nombre","Hector")
# print("Ahora se llama",doctor.nombre)


# print("El doctor tiene una edad?", hasattr(doctor,"edad"))
# print("La edad es:",doctor.edad)



