# Bit谩cora del Proyecto: Transportaciones V谩zquez Heredia

## Estado Actual
- **Fase:** Prototipado y Maquetaci贸n del Website Persuasivo (`protos/`).
- **脷ltima Actualizaci贸n:** 2026-11-10.
- **Repositorio Git:** Inicializado con exclusi贸n de `/000/*` en `.gitignore`.

---

## Registro de Actividades y Decisiones

### 2026-11-10: Fase de Investigaci贸n y Extracci贸n de Datos
1. **Recuperaci贸n de Datos Oficiales:**
   - Se investigaron las menciones oficiales en el *Yearbook 2022* de la ASIPONA del Puerto de Altamira y el perfil oficial de Facebook (`https://www.facebook.com/transportacionesvh`).
   - Se confirm贸 que el dominio anterior era `transportacionesvh.com`.
   - Se obtuvieron tel茅fonos verificados: `(833) 297 01 14`, `(833) 181 18 90`, `(833) 297 00 94`.
   - Se confirmaron los datos de infraestructura: 2 patios de operaciones, primer patio de 11,400 m虏 a 9 km del puerto, bodega techada de 2,600 m虏 con capacidad de 50 toneladas y 2 rampas de 35,000 lbs.
2. **Descarga de Activos Visuales Reales:**
   - Se descargaron 7 fotograf铆as p煤blicas del perfil de Facebook en `000/pics/` abarcando unidades Kenworth (#101, #104, #117), plataformas full encarpadas, cajas secas, contenedores de 40' y patio de maniobras.
   - Se dise帽贸 el logotipo vectorial `vh-logo.svg` basado en el arte oficial de la empresa.
3. **Estructura Documental Creada:**
   - `context/info/empresa.md`: Ficha t茅cnica de la empresa.
   - `context/plans/01-plan-maestro-website.md`: Plan de arquitectura de informaci贸n del sitio.
   - `context/features/README.md`: Base para features y planes detallados del usuario.
   - `context/current.md`: Bit谩cora del proyecto.
4. **Pr贸xima Tarea:**
   - Implementaci贸n del prototipo web completo en `protos/index.html` con CSS y JS en `protos/assets/`.

### 2026-11-10 20:01 - Repositorio Remoto en GitHub
- Repositorio remoto creado y enlazado: https://github.com/krammstein/transportacionesvh
- Rama principal main subida con 閤ito.

### 2026-11-10 20:06 - Despliegue en Servidor de Producci髇 (HostGator)
- Subdominio creado en cPanel v韆 SSH: 	rans.quantikapps.com.mx
- DocumentRoot: /home1/luisdirc/trans.quantikapps.com.mx/
- Despliegue completado: index.html + ssets/ (css, js, img) con permisos 755/644.
- Verificaci髇 en vivo: HTTP 200 y HTTPS 200 OK.
- URL p鷅lica: https://trans.quantikapps.com.mx
