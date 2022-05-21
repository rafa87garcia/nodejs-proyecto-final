modelos de ecommerce:
modelo de usuario (roles)
    email
    nombre
    password
    roles
    image

modelo de producto 
    nombre
    descripcion
    image
    precio
    categoria

modelo de pedido:
   *usuario
   *productos
   

endpoints de usuarios
registro            post    anonimo         /users/
login               post    registrado,     /users/login
modificar           put     registrado,     /users/ 
logout              post    registrado,     /users/logout
delete              delete  registrado,     /users/        
getuser             get     admin.          /users/
getuser_id          get     admin.          /users/:id

endpoints de producto:
obtener porductos   get     anonimo         /products/
obtener porducto    get     anonimo         /products/:id
crear               post    admin           /products/
eliminar            detele  admin           /products/:id
modificar           put     admin           /products/:id


pedido:
nuevopedido         post    regstrado       /orders
obtenerpedidos      get     registrado      /orders
modificarpedido     put     admin           /orders
eliminarpedido      delete  admin           /orders


consul

(* común)