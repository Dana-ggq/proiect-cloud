
\- proiect -

CLOUD COMPUTING











**Aplicație cu recomandări de călătorie**




PROFESOR COORDONATOR: Timofte Carmen Manuela 

STUDENT: Georgescu Dana Gabriela 

MASTER: SIMPRE

AN: 2023







Link aplicație: https://proiect-cloud-trip.vercel.app/

Link videoclip de prezentare: https://youtu.be/dsUDs5uNKZE	


# 1\. Introducere. 
Este bine cunoscut că Internetul și în prezent soluțiile cloud au o influență puternică asupra vieții de zi cu zi a oamenilor fiind aproape indispensabile pentru o bună parte din societate. Ele alterează modul în care oamenii interacționează cu alți oameni, dar și cu diferite produse și/sau servicii. 

Una dintre cele mai plăcute activități, devenită hobby pentru mulți este călătoritul.  Globalizarea și digitalizarea au revoluționat domeniul turismului, de la banalul GPS la posibilitatea rezervării unui întreg concediu printr-un singur click. Totodată realizarea itinerariului pentru viitoarea vacanță a devenit un complet proces de căutări prin recomandări și bloguri de călătorie. Aceste site-uri și aplicații de recomandări sunt o resursă excelentă pentru călători, acesția fiind astfel pregătiți să ia cele mai bune alegeri în timpul călătoriei.
# 2\. Descrierea problemei
Aplicația proiectată este dedicată călătorilor. Acestia pot citi recomandări de la alte persoane pasionate de călătorit pentru viitoarele lor aventuri. 

Utilizatorii pot urmări recomandări din toată lumea sau dintr-un oraș specific unde urmează să călătorească. Oricine își poate posta recomandările de vacanță prin intermediul formularului de adăugare. Pentru a ajuta călătorii, există posibilitatea de a urmări știri care ar putea fi de interes în legătură cu orașul ce urmează să fie vizitat. 

Pentru afișarea știrilor s-a utilizat un serviciu cloud, mai precis un API specializat (newsapi.ai) care permite preluarea și filtrarea știrilor din întreaga lume. De asemenea s-a utilizat un API (Countries & Cities API) pentru preluarea tuturor orașelor din lume în vederea populării unui drop down din interfața utilizator pentru a ușurarea cătuărilor și introducerii de date.

În implementarea aplicației s-au utilizat tehnologiile Next.js și Node.js și s-a realizat legătura cu o bază de date în cloud MongoDB. De asemenea aplicația a fost publicată pe platforma cloud de hosting Vercel.
# 3\. Descriere API 
Pentru realizara unor funcționalități s-au utilizat 2 API-uri externe apelate în front-end pentru a prelua datele dorite.

Countries & Cities API: 

Este un API gratuit de unde se pot prelua numeroase informații despre țări și orașe din lume cum ar fi populația, locația, steaguri, monede, capital. S-a folosit acest API pentru a prelua toate orașele din lume pentru a popula un control de tip dropdown care lucrează asincron, controlul AsyncSelect din React. Pentru utilizarea nu este necesară o cheie ci doar realizara unei cereri către endpoint-ul dorit. În cazul aplicației se dorește preluarea tuturor orașelor din lume acest lucru se face realizând o cerere GET la end pointul countries. Răspunsul primit de la API conține o listă de țări fiecare având o listă cu orașe.
image.png
*Figure 1 Utilizare API Countries & Cities pentru preluare orase*

*Figure 2 Răspuns GET API*

News API:

NewsAPI.ai oferă 2000 de tokenuri gratuite pentru userii care nu plătesc un abonament. Pentru a avea acces nelimitat la toate funcționalitățile este necesara plății unei sume lunare. Pentru a trimite cereri către API este necesară o cheie care se primește la crearea unui cont pe platformă. Există numeroase endpointuri, se pot prelua și filtra articole din toată lumea. 

`	`În aplicație s-a utilizat endpoint-ul getArticles pentru a prelua și posta știri. Pentru filtrări s-au utilizat parametrii: keyword care v-a primi numele orașului de interes și lang care primește valoarea eng pentru a afișa doar știrile în limba engleză. 

*Figure 3 Exemplu răspuns cerere GET*

REST API pentru conectarea cu baza de date:

`	`Pentru a realiza operații CRUD pe baza de date remote MongoDB s-au implementat o serie de metode. Operațiile necesare sunt selectarea tuturor recomandărilor, selectarea recomandărilor dintr-un oraș specific primit ca parametru și introducerea de noi recomandări. 

*Figure 4 Metode de selecție GET*

*Figure 5 Metodă adăugare recomandare POST*
# 4\. Flux de date (0,25p)
Exemple de request/response:

- GET: <http://localhost:3000/api/records>

*Figure 6 Răspuns cerere GET pentru toate recomandările*

- GET: <http://localhost:3000/api/records?city=Tokyo>

*Figure 7 Răspuns GET recomandări dintr-un oraș specific*

- POST : http://localhost:3000/api/records

*Figure 8 Corp cerere POST*

*Figure 9 Răspuns POST*

Descriere metode HTTP:

- GET: <http://localhost:3000/api/records>

Metoda care întoarce toate recomandările nu primește niciun parametru și întoarce toate înregistrările din baza de date.

- GET: <http://localhost:3000/api/records?city=Tokyo>

Metoda getRecordsByCity primește un parametru, city, valoarea lui reprezentând orașul pentru care se dorește extragerea recomandărilor din baza de date.

- POST : <http://localhost:3000/api/records>

Metoda postRecords nu primește niciun parametru, dar va primi un body. În body se specifică elementele ce alcătuiesc o recomandare: titlu, autor, data, oraș și recomandarea în sine. Introducerea de date va fi controlată prin front end, astfel toate câmpurile vor fi obligatorii iar data se va introduce automat preluând ziua curentă în care este scrisă recomandarea.

Autentificare și autorizare servicii utilizate:

`	`Pentru utilizara API-ului pentru preluarea orașelor nu a fost nevoie de autentificare, însă pentru NewsAPI a fost necesară obținerea unui chei care se introduce în cerere ca parametru.

`	`Pentru conectarea cu baza de date la distanță este nevoie să se specifice un string de conectare care conține numele de utilizator și o parolă. De asemenea trebuie să se specifice și numele exact al bazei de date utilizate.
# 5\. Capturi ecran aplicație
Pagina principală aplicație:


Drop down de tip AsyncSelect care preia toate orașele din lume de pe API și oferă sugestii pe măsură ce utilizatorul completează denumirea orașului căutat:

`	`Recomandări filtrate după orașul căutat.


Formular adăugare recomandare:

Avertizări formular incomplet:

Pagina care afișează știrile preluate de pe API care conțin în corp denumirea orașului căutat:


6\. Referințe

Link aplicație: https://proiect-cloud-trip.vercel.app/

Link videoclip de prezentare: https://youtu.be/dsUDs5uNKZE	
