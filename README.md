# 0376-Ra4Pr2 — Projecte Col·laboratiu Mastermind

**Membres de la parella:**
- Estudiant A: Bazam (feature-ui-logic)
- Estudiant B: Stanislav (feature-game-engine)

---

## Bateria de preguntes sobre Git i GitHub

---

## 1. Reconeix la utilitat de les aplicacions d'ofimàtica web

### 1.1 Per què GitHub es pot considerar una aplicació web de treball col·laboratiu?

GitHub és una plataforma accessible des del navegador que permet a múltiples persones treballar sobre el mateix projecte de forma simultània i coordinada. 

### 1.2 Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d'un projecte només en un ordinador local?

- **Accés des de qualsevol lloc:** els fitxers estan al núvol i es poden consultar i modificar des de qualsevol dispositiu amb connexió a Internet.
- **Còpia de seguretat automàtica:** si l'ordinador local falla, el codi no es perd.
- **Col·laboració en temps real:** diverses persones poden treballar al mateix projecte sense sobreescriure's.
- **Historial de canvis:** es pot veure qui ha fet cada canvi i quan, i revertir a versions anteriors si cal.
- **Revisió de codi:** es poden fer revisions i comentaris abans d'integrar canvis al projecte principal.

### 1.3 Com pot ajudar GitHub a gestionar versions d'un projecte web o d'una aplicació?

GitHub, basat en Git, guarda un historial complet de tots els canvis fets al codi. Cada commit és un punt de restauració al qual es pot tornar en qualsevol moment.


### 1.4 En quins tipus de projectes és especialment útil utilitzar Git i GitHub?

Qualsevol projecte que impliqui canvis freqüents i treball en equip es beneficia de Git i GitHub.

### 1.5 Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d'emmagatzematge de fitxers?

| Característica | Sistema tradicional (carpetes/USB) | Git |
|---|---|---|
| Historial de canvis | No en té | Registra cada canvi amb data i autor |
| Col·laboració | Difícil, risc de sobreescriure | Fusió controlada de canvis |
| Recuperació d'errors | Cal fer còpies manuals | Es pot revertir a qualsevol commit |
| Branques | No existeixen | Permet treballar en paral·lel |
| Traçabilitat | Nul·la | Total (qui, quan, per què) |

---

## 2. Classifica segons la funcionalitat i prestacions específiques

### 2.1 Quina és la diferència entre Git i GitHub?

**Git** és un sistema de control de versions distribuït que s'instal·la localment a l'ordinador. Permet gestionar l'historial de canvis d'un projecte mitjançant commits, branques i merges, tot sense necessitat de connexió a Internet.

**GitHub** és una plataforma web que allotja repositoris Git al núvol. Afegeix una capa social i col·laborativa per sobre de Git: interfície gràfica, gestió d'equips, pull requests, issues, etc.

En resum: Git és l'eina, GitHub és la plataforma que la utilitza.

### 2.2 Quines funcionalitats ofereix GitHub a més del control de versions del codi?

- **Issues:** sistema de seguiment d'errors i tasques.
- **Pull Requests:** revisió i discussió de canvis abans de fusionar-los.
- **GitHub Pages:** allotjament gratuït de llocs web estàtics.
- **GitHub Actions:** automatització de fluxos de treball (CI/CD).
- **Wiki:** documentació integrada al repositori.
- **Projects:** taulers Kanban per gestionar tasques.
- **Discussions:** fòrum integrat per a la comunitat del projecte.

### 2.3 Definicions de funcionalitats de GitHub

- **Repositoris:** Espai on s'emmagatzema tot el codi, l'historial de canvis i la documentació d'un projecte. Pot ser públic o privat.

- **Issues:** Sistema de tiquets per reportar errors, proposar millores o assignar tasques als membres de l'equip. Permet fer el seguiment del progrés del projecte.

- **Pull Requests:** Sol·licitud per fusionar els canvis d'una branca a una altra. Permet revisar el codi, fer comentaris i aprovar o rebutjar els canvis abans d'integrar-los.

- **GitHub Pages:** Servei gratuït que permet publicar un lloc web estàtic directament des d'un repositori de GitHub, ideal per a documentació o portfolis.

### 2.4 Quina funció tenen les branques (branches) en Git?

Les branques permeten treballar en paral·lel sobre el mateix projecte sense afectar el codi principal. Cada branca és una còpia independent on es poden fer canvis, provar funcionalitats o corregir errors. Un cop el treball està llest i revisat, la branca es fusiona (*merge*) a la branca principal (`main`).

En aquesta pràctica, per exemple:
- `feature-ui-logic` → Estudiant A treballa la interfície.
- `feature-game-engine` → Estudiant B treballa la lògica del joc.

### 2.5 Per a què serveixen les pull requests en un projecte col·laboratiu?

Les pull requests (PR) serveixen per proposar la fusió dels canvis d'una branca a una altra de forma controlada. En un projecte col·laboratiu permeten:
- Revisar el codi abans d'integrar-lo.
- Comentar línies específiques i suggerir millores.
- Assegurar que el codi passa les proves automàtiques.
- Mantenir un registre de per què es van fer els canvis.

---

## 3. Gestiona els comptes d'usuari

### 3.1 Què és un compte d'usuari a GitHub i per què és necessari?

Un compte d'usuari a GitHub és un perfil personal que identifica un desenvolupador a la plataforma. És necessari per:
- Crear i gestionar repositoris propis.
- Col·laborar en repositoris d'altres usuaris.
- Fer commits, obrir issues i pull requests.
- Configurar permisos i accedir a repositoris privats.

Sense compte, només es pot veure codi públic però no contribuir-hi.

### 3.2 Diferència entre repositori públic i privat

| | Repositori Públic | Repositori Privat |
|---|---|---|
| Visibilitat | Qualsevol persona pot veure'l | Només els col·laboradors autoritzats |
| Col·laboració | Qualsevol pot fer fork | Només els convidats |
| Ús habitual | Open source, portfolis | Projectes empresarials o personals |
| Cost | Gratuït | Gratuït (amb limitacions en plans gratuïts) |

### 3.3 Com s'afegeix un col·laborador a un repositori?

1. Anar al repositori a GitHub.
2. Clicar a **Settings** → **Collaborators**.
3. Clicar a **Add people**.
4. Cercar l'usuari pel seu nom d'usuari o correu electrònic.
5. Enviar la invitació. L'usuari ha d'acceptar-la per accedir al repositori.

### 3.4 Quins rols o permisos pot tenir un usuari?

| Rol | Permisos principals |
|---|---|
| **Read** | Pot veure i clonar el repositori |
| **Triage** | Pot gestionar issues i pull requests |
| **Write** | Pot fer push de canvis al repositori |
| **Maintain** | Pot gestionar el repositori sense accés a configuració crítica |
| **Admin** | Accés total, inclosa la configuració i eliminació del repositori |

### 3.5 Per què és important gestionar correctament els permisos?

Una mala gestió dels permisos pot provocar:
- Eliminació accidental o maliciosa de codi.
- Publicació de canvis no revisats a la branca principal.
- Accés no autoritzat a codi confidencial.
- Conflictes difícils de resoldre per sobreescriptura de fitxers.

Assignar el mínim permís necessari a cada persona redueix els riscos considerablement.

---

## 4. Aplica criteris de seguretat en l'accés dels usuaris

### 4.1 Riscos de compartir un repositori amb massa permisos

- Qualsevol membre podria modificar o eliminar codi crític.
- Es podrien fer push directes a `main` sense revisió.
- Usuaris no autoritzats podrien accedir a informació sensible.
- Dificultat per rastrejar qui ha provocat un error o incident.

### 4.2 Per què és recomanable usar tokens o SSH?

Les contrasenyes convencionals són vulnerables a atacs de força bruta i phishing. En canvi:
- **Tokens d'accés personal (PAT):** permeten limitar l'abast dels permisos i caduquen automàticament.
- **Claus SSH:** utilitzen criptografia asimètrica, molt més segura que una contrasenya. No es transmeten per la xarxa.

A més, si un token o clau es compromet, es pot revocar sense canviar la contrasenya del compte.

### 4.3 Què passaria si es publiquen contrasenyes o claus privades al repositori?

Si es publica informació sensible (contrasenyes, API keys, claus SSH privades) en un repositori públic:
- Qualsevol persona al món pot veure-les immediatament.
- Robots automatitzats escanegen GitHub constantment buscant exactament això.
- El compte o servei afectat podria ser compromès en qüestió de minuts.
- Tot i esborrar el fitxer, l'historial de Git conserva el contingut.

La solució és usar fitxers `.env` i afegir-los al `.gitignore` per mai pujar-los al repositori.

### 4.4 Bones pràctiques de seguretat a GitHub

- Mai pujar contrasenyes, tokens o claus privades al repositori.
- Usar `.gitignore` per excloure fitxers sensibles.
- Activar l'autenticació en dos factors (2FA) al compte.
- Usar tokens amb permisos mínims i data de caducitat.
- Revisar regularment els col·laboradors i revocar accessos innecessaris.
- Protegir la branca `main` per evitar push directes.

### 4.5 Per què és important controlar qui pot fer push a main?

La branca `main` és el codi en producció o la versió estable del projecte. Si qualsevol persona pot fer push directament:
- Es pot introduir codi amb errors sense revisió.
- Es poden generar conflictes difícils de resoldre.
- Es perd el control sobre la qualitat del codi integrat.

La solució és activar les **branch protection rules** a GitHub, que obliguen a passar per una pull request i aprovació abans de fusionar canvis a `main`.

---

## 5. Utilitza les aplicacions de forma cooperativa

### 5.1 Com poden treballar diverses persones al mateix projecte?

El flux de treball col·laboratiu típic amb GitHub és:

1. Un membre fa un **fork** o clona el repositori.
2. Cada persona crea la seva pròpia **branca** per a la seva tasca.
3. Es fan **commits** amb canvis descriptius.
4. Es fa **push** de la branca al repositori remot.
5. S'obre una **pull request** per proposar la fusió a `main`.
6. La resta de l'equip revisa el codi i aprova o comenta.
7. Es fa el **merge** a `main` un cop aprovat.

Amb aquest flux, diverses persones treballen en paral·lel sense interferir-se.

### 5.2 Per què és útil treballar amb branques en lloc de modificar main directament?

Treballar directament a `main` és arriscat perquè:
- Qualsevol error afecta immediatament la versió estable.
- Dos desenvolupadors modificant els mateixos fitxers generaran conflictes difícils de gestionar.
- No hi ha oportunitat de revisar el codi abans d'integrar-lo.

Les branques permeten desenvolupar de forma aïllada, provar els canvis i integrar-los de manera controlada i segura.

---

## 6. Elabora documentació relativa a l'ús i la gestió de les aplicacions

### 6.1 Per què és important incloure un README.md?

El `README.md` és la primera cosa que veu qualsevol persona que visita el repositori. Serveix per:
- Explicar de quin tracta el projecte.
- Indicar com instal·lar-lo i executar-lo.
- Documentar les funcionalitats principals.
- Facilitar la contribució d'altres desenvolupadors.

Un repositori sense README és opac i poc professional.

### 6.2 Avantatges d'usar Markdown per a la documentació

- **Llegibilitat:** el text és llegible tant en format pla com renderitzat.
- **Senzillesa:** la sintaxi és molt simple i s'aprèn ràpidament.
- **Compatibilitat:** GitHub renderitza Markdown automàticament amb format visual.
- **Portabilitat:** funciona en qualsevol editor de text.
- **Expressivitat:** permet títols, llistes, taules, codi, imatges i enllaços sense necessitat d'HTML.

### 6.3 Com ajuda la documentació a altres desenvolupadors?

Una bona documentació permet que qualsevol desenvolupador pugui:
- Entendre l'estructura i la lògica del projecte sense llegir tot el codi.
- Configurar l'entorn de desenvolupament sense ajuda externa.
- Contribuir al projecte seguint les normes establertes.
- Identificar les funcions disponibles i com cridar-les.
- Resoldre problemes comuns gràcies a seccions de FAQ o troubleshooting.

En definitiva, la documentació redueix la barrera d'entrada i fa el projecte més accessible i sostenible a llarg termini.
