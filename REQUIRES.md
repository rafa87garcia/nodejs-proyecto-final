# Requerimientos e-commerce

## Modelos de datos

### modelo de usuario (roles)
- email
- name
- password
- roles
- image

### modelo de producto 
- name
- descripcion
- image
- precio
- categoria

### pedido:
- *usuario
- *productos
   
## Endpoints de usuarios

### Usuarios
| Desciption | Method | Roles | EndPoint
|--- |--- |--- |--- |
| registro       | post     | anonimo       | /users
| login          | post     | registrado    | /users/login
| modificar      | put      | registrado,   | /users/ 
| logout         | post     | registrado,   | /users/logout
| delete         | delete   | registrado,   | /users/        
| getuser        | get      | admin.        | /users/
| getuser_id     | get      | admin.        | /users/:id

### Productos
| Desciption | Method | Roles | EndPoint
|--- |--- |--- |--- |
| Get products      |  get     | anonimo    | /products/
| obtener porducto  |  get     | anonimo    | /products/:id
| crear             |  post    | admin      | /products/
| eliminar          |  detele  | admin      | /products/:id
| modificar         |  put     | admin      | /products/:id

### Pedidos

| Desciption | Method | Roles | EndPoint
|--- |--- |--- |--- |
| New order         |  post    | regstrado  | /orders
| Get order         |  get     | registrado | /orders
| Edit order        |  put     | admin      | /orders/:id
| Delete order      |  delete  | admin      | /orders/:id