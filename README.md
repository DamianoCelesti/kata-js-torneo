# kata-js-torneo

Fase 1 – Assegnazione armi

Per ogni combattente scelgo un’arma a caso dall'elenco e gliela assegno
Uso splice per rimuoverla dal pool, così nessun’arma può essere assegnata due volte(splice modifica l’array originale)
Alla fine sommo la potenza del fighter con quella dell’arma

Fase 2 – Allenamento

Simulo l’allenamento applicando un moltiplicatore casuale alla potenza di ogni combattente
Uso map per creare un nuovo array di partecipanti allenati: in questo modo aggiorno i valori senza modificare direttamente quelli dell’array originale


Fase 3 – Qualificazione

A questo punto filtro i partecipanti: solo chi supera la soglia minima di potenza (2000) può andare avanti

Fase 3.1 – Qualificazione

Se i qualificati sono in numero dispari, aggiungo un “robot” con potenza fissa
Questo serve per avere sempre un numero pari di combattenti, così gli scontri 1 contro 1 funzionano senza lasciare nessuno da solo

Fase 4 – Combattimenti

Abbino i combattenti due a due con un ciclo for
In ogni coppia confronto la potenza e mando avanti soltanto il più forte che viene aggiunto alla lista dei vincitori

Fase 5 – Podio

Per stabilire il podio creo prima una copia dell’array dei vincitori (così non lo modifico con sort)
Poi ordino i partecipanti dal più potente al meno potente (sort) e prendo i primi tre (slice), che diventano i finalisti sul podio