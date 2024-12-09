# SZFM_DEMO
SZFM_DEMO

Ez az útmutató segítséget nyújt a szükséges lépésekben, amelyeket a projekt futtatásához kell tenned. A projekt Fekete Rudolf, Szabó Rudolf, Hajdú Bence és Balog Sebastian munkáján alapul. A szerver és kliens oldali kódok fejlesztéséhez és futtatásához a következő lépéseket kell követned.

Előkészületek: 
- Mielőtt elkezded, győződj meg róla, hogy a számítógépedre telepítve van a Node.js. Ez szükséges ahhoz, hogy a következő parancsokat futtatni tudd. A Node.js legfrissebb verzióját a hivatalos oldalról töltheted le és telepítheted.

Szükséges könyvtárak telepítése
 Nyisd meg a terminált vagy parancssort a projekt mappájában, és futtasd az alábbi parancsokat a szükséges könyvtárak telepítéséhez:
  -npm install express mongoose bcryptjs jsonwebtoken dotenv
  -npm install --save-dev @types/node @types/express @types/bcryptjs @types/jsonwebtoken @types/mongoose ts-node nodemon typescript
  -npm install react-icons
  -npm install jspdf html2canvas --force


Miután minden szükséges könyvtár telepítve lett, a projekt elindításához használd a következő parancsot:
 -npm install --force
 npm run dev

 A npm run dev parancs futtatása előtt győződj meg róla, hogy a package.json fájlban megfelelően van konfigurálva a dev szkript, amely általában a nodemon segítségével indítja el a szervert.

Ezekkel a lépésekkel sikeresen beállíthatod és elindíthatod a projektet, amely készen áll a fejlesztésre és tesztelésre a lokális környezetben.

