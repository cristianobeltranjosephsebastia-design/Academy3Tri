# Proyecto: Fred’s Furniture & Ferretería
**Autor:** Sebastián Cristiano 3203084  
**Programa:** Análisis y Desarrollo de Software – 2° Trimestre  
**Tema:** Normalización de bases de datos (hasta 3FN)

---

## Parte 1 – Análisis conceptual

### 1. ¿Qué problema principal busca resolver la normalización en una base de datos y por qué es crítica en sistemas empresariales?  
La normalización busca eliminar redundancias y prevenir inconsistencias en los datos.  
Es crítica en entornos empresariales porque mejora la integridad, reduce errores y facilita el mantenimiento, especialmente cuando se manejan grandes volúmenes de información.

---

### 2. Diferencias entre 1NF, 2NF y 3NF  
- **1NF:** Cada campo debe tener un solo valor (atómico). Se eliminan listas o grupos repetidos.  
- **2NF:** Todos los atributos dependen de la clave primaria completa, no solo de una parte.  
- **3NF:** Elimina dependencias transitivas; los campos no clave no deben depender de otros campos no clave.

---

### 3. Ejemplo donde la normalización mejora la integridad pero puede afectar el rendimiento  
Al dividir una tabla en varias (por ejemplo, clientes, pedidos y productos), se evita la redundancia, pero las consultas complejas requieren múltiples `JOIN`, lo que puede afectar el rendimiento en sistemas con muchas transacciones.

---

### 4. Papel de las dependencias funcionales  
Las dependencias funcionales determinan cómo un atributo depende de otro.  
Por ejemplo: `id_cliente → nombre_cliente`.  
Son clave para detectar cuándo separar información en nuevas tablas y aplicar correctamente las formas normales.

---

### 5. ¿Cuándo es justificable desnormalizar una base de datos?  
Cuando la velocidad de consulta o generación de reportes es más importante que la integridad estricta.  
Por ejemplo, en sistemas de análisis donde se prioriza la lectura sobre la escritura.

---

## Parte 2 – Caso práctico: Fred’s Furniture

### Diagnóstico inicial  
La tabla original `furniture_sales` presentaba columnas repetitivas para productos (`item_1`, `item_2`, `item_3`), lo que causaba:
- Anomalías de inserción: no se pueden agregar más productos sin alterar la estructura.  
- Anomalías de actualización: cambiar el precio exige modificar múltiples registros.  
- Anomalías de eliminación: al eliminar un pedido se pierde información del cliente o producto.

---

### Normalización (hasta 3FN)

#### 1FN  
Se separan los valores multivaluados en una tabla independiente.

#### 2FN  
Cada campo depende de la clave primaria completa.

#### 3FN  
Se eliminan dependencias transitivas.  
Estructura final:

```sql
CREATE TABLE clientes (
  id_cliente INT PRIMARY KEY AUTO_INCREMENT,
  telefono VARCHAR(50),
  email VARCHAR(100)
);

CREATE TABLE pedidos (
  id_pedido INT PRIMARY KEY AUTO_INCREMENT,
  fecha_pedido DATE,
  id_cliente INT,
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE productos (
  id_producto INT PRIMARY KEY AUTO_INCREMENT,
  nombre_producto VARCHAR(100),
  precio DECIMAL(10,2)
);

CREATE TABLE detalles_pedido (
  id_detalle INT PRIMARY KEY AUTO_INCREMENT,
  id_pedido INT,
  id_producto INT,
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
```

Diagrama E-R: `freds_furniture_ER.png`

---

## Parte 3 – Proyecto personal: Ferretería “ToolMaster”

### Descripción  
Sistema de gestión de inventario y ventas para una ferretería.  
Permite registrar categorías, proveedores, productos, inventarios y ventas.

---

### Tablas (normalizadas hasta 3FN)

```sql
CREATE TABLE categorias (
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  nombre_categoria VARCHAR(100)
);

CREATE TABLE proveedores (
  id_proveedor INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100),
  telefono VARCHAR(50)
);

CREATE TABLE productos (
  id_producto INT PRIMARY KEY AUTO_INCREMENT,
  nombre_producto VARCHAR(100),
  precio DECIMAL(10,2),
  id_categoria INT,
  id_proveedor INT,
  FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
  FOREIGN KEY (id_proveedor) REFERENCES proveedores(id_proveedor)
);

CREATE TABLE inventario (
  id_inventario INT PRIMARY KEY AUTO_INCREMENT,
  id_producto INT,
  cantidad INT,
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE ventas (
  id_venta INT PRIMARY KEY AUTO_INCREMENT,
  fecha DATE
);

CREATE TABLE detalles_venta (
  id_detalle INT PRIMARY KEY AUTO_INCREMENT,
  id_venta INT,
  id_producto INT,
  cantidad INT,
  FOREIGN KEY (id_venta) REFERENCES ventas(id_venta),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
```

Diagrama E-R: `mi_proyecto_ER.png`

---

### Reglas de negocio  
- Cada producto pertenece a una categoría y a un proveedor.  
- Un inventario controla las existencias de cada producto.  
- Las ventas pueden incluir varios productos (relación N:M).  
- Los detalles de venta registran las cantidades y permiten control de stock.

---

### Justificación del diseño  
El modelo aplica hasta 3FN, asegurando:
- Integridad referencial entre productos, ventas e inventario.  
- Flexibilidad para agregar nuevas categorías o proveedores.  
- Escalabilidad para futuras integraciones con módulos de compras o facturación.
