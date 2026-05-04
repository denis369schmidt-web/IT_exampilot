export type CurriculumArea =
  | "BASICS"
  | "PROGRAMMING"
  | "DATABASES"
  | "WEB"
  | "PROJECT"
  | "AP1"
  | "WISO";

export interface LessonUnit {
  id: string;
  area: CurriculumArea;
  title: string;
  schoolLevel: "Grundlagen" | "Mittelstufe" | "Pruefungsniveau";
  examFocus: "AP1" | "AP2" | "AP1 + AP2";
  lesson: string[];
  keyTerms: string[];
  remember: string[];
  schoolExercises: string[];
  examTasks: string[];
  selfCheck: string[];
}

export const curriculumAreaLabels: Record<CurriculumArea, string> = {
  BASICS: "IT-Grundlagen",
  PROGRAMMING: "Programmieren",
  DATABASES: "Datenbanken",
  WEB: "Webentwicklung",
  PROJECT: "Projektarbeit",
  AP1: "AP1-Basis",
  WISO: "WiSo"
};

export const curriculum: LessonUnit[] = [
  {
    id: "it-systems-and-workplace",
    area: "AP1",
    title: "IT-Systeme und Arbeitsplatz einrichten",
    schoolLevel: "Grundlagen",
    examFocus: "AP1",
    lesson: [
      "Ein IT-Arbeitsplatz ist mehr als ein Computer. Dazu gehoeren Hardware, Betriebssystem, Software, Benutzerkonto, Berechtigungen, Netzwerkzugang, Sicherheit, Ergonomie und Support.",
      "In der AP1 musst du aus einer beruflichen Situation eine passende technische Loesung ableiten. Entscheidend ist, dass du Anforderungen erkennst, Alternativen vergleichst und deine Entscheidung wirtschaftlich begruendest.",
      "Typische Aufgabe: Ein Unternehmen braucht neue Arbeitsplaetze. Du musst passende Geraete, Software, Kosten, Datenschutz und Einrichtungsschritte nennen."
    ],
    keyTerms: [
      "Client",
      "Server",
      "Betriebssystem",
      "Treiber",
      "Benutzerkonto",
      "Rollen und Rechte",
      "TCO",
      "Ergonomie"
    ],
    remember: [
      "Erst Anforderung verstehen, dann Loesung waehlen.",
      "Die beste Loesung ist passend, sicher, wartbar und wirtschaftlich.",
      "Ein Arbeitsplatz braucht immer auch Sicherheits- und Datenschutzbetrachtung."
    ],
    schoolExercises: [
      "Plane einen Arbeitsplatz fuer Entwicklung, Vertrieb und Homeoffice. Vergleiche die Anforderungen.",
      "Erstelle eine Checkliste fuer die Erstinstallation eines neuen Notebooks.",
      "Berechne grob Anschaffungskosten plus laufende Kosten fuer drei Jahre."
    ],
    examTasks: [
      "Nenne drei Kriterien fuer die Auswahl eines Notebooks im Unternehmen und begruende sie.",
      "Erklaere, warum Benutzerrechte nach dem Minimalprinzip vergeben werden.",
      "Beschreibe eine sinnvolle Reihenfolge zur Inbetriebnahme eines Arbeitsplatzes."
    ],
    selfCheck: [
      "Ich kann Hardware passend zu Anforderungen auswaehlen.",
      "Ich kann eine Arbeitsplatzentscheidung wirtschaftlich begruenden.",
      "Ich kann Sicherheitsaspekte bei der Einrichtung nennen."
    ]
  },
  {
    id: "network-and-internet",
    area: "AP1",
    title: "Netzwerke, Internet und Dienste",
    schoolLevel: "Grundlagen",
    examFocus: "AP1 + AP2",
    lesson: [
      "Netzwerke verbinden Geraete, damit sie Daten austauschen koennen. Wichtige Grundlagen sind IP-Adresse, Subnetzmaske, Gateway, DNS, DHCP, Switch, Router und Firewall.",
      "DNS uebersetzt Namen in IP-Adressen. DHCP verteilt IP-Konfiguration automatisch. Ein Gateway verbindet dein lokales Netzwerk mit anderen Netzwerken.",
      "Bei Netzwerkproblemen arbeitest du systematisch: Verbindung pruefen, IP-Konfiguration pruefen, Gateway pruefen, DNS pruefen, Zielsystem pruefen."
    ],
    keyTerms: [
      "IPv4",
      "Subnetz",
      "Gateway",
      "DNS",
      "DHCP",
      "Switch",
      "Router",
      "Firewall",
      "Port",
      "HTTP"
    ],
    remember: [
      "Ohne IP keine Netzwerkkommunikation.",
      "Ohne DNS funktionieren Namen nicht, IPs koennen trotzdem funktionieren.",
      "Eine Firewall filtert Verkehr nach Regeln."
    ],
    schoolExercises: [
      "Erklaere den Weg einer Anfrage von deinem Browser zu einer Webseite.",
      "Zeichne ein kleines Firmennetz mit Client, Switch, Router, Server und Internet.",
      "Analysiere, was eine 169.254.x.x-Adresse bedeuten kann."
    ],
    examTasks: [
      "Unterscheide DNS und DHCP.",
      "Beschreibe, was du pruefst, wenn ein Client keine Webseite oeffnen kann.",
      "Erklaere den Unterschied zwischen privater und oeffentlicher IP-Adresse."
    ],
    selfCheck: [
      "Ich kann DNS, DHCP und Gateway unterscheiden.",
      "Ich kann einfache Netzwerkfehler strukturiert eingrenzen.",
      "Ich kann einen einfachen Netzwerkplan lesen."
    ]
  },
  {
    id: "programming-foundations",
    area: "PROGRAMMING",
    title: "Grundlagen des Programmierens",
    schoolLevel: "Grundlagen",
    examFocus: "AP2",
    lesson: [
      "Programmieren bedeutet, Probleme in eindeutige Schritte zu zerlegen und diese Schritte in Code zu formulieren. Dafuer brauchst du Variablen, Datentypen, Funktionen, Bedingungen, Schleifen und Datenstrukturen.",
      "TypeScript erweitert JavaScript um Typen. Dadurch erkennt der Compiler viele Fehler, bevor das Programm laeuft.",
      "Guter Code ist nicht nur funktionierend, sondern lesbar, testbar und wartbar."
    ],
    keyTerms: [
      "Variable",
      "Datentyp",
      "Funktion",
      "Parameter",
      "Rueckgabewert",
      "Bedingung",
      "Schleife",
      "Array",
      "Objekt"
    ],
    remember: [
      "Eine Funktion sollte eine klare Aufgabe haben.",
      "Typen beschreiben, welche Werte erlaubt sind.",
      "Fehlerfaelle gehoeren zum Programmieren dazu."
    ],
    schoolExercises: [
      "Schreibe eine Funktion, die aus mehreren Prozentwerten den Durchschnitt berechnet.",
      "Typisiere ein Topic-Objekt mit title, progress und status.",
      "Erklaere eine if-Abfrage anhand des Topic-Status."
    ],
    examTasks: [
      "Erklaere den Unterschied zwischen Parameter und Rueckgabewert.",
      "Finde den Fehler in einer Funktion, die mit leeren Arrays nicht umgehen kann.",
      "Beschreibe, warum TypeScript bei groesseren Projekten hilft."
    ],
    selfCheck: [
      "Ich kann kleine Funktionen schreiben und erklaeren.",
      "Ich kann einfache TypeScript-Typen lesen.",
      "Ich kann Bedingungen und Schleifen sinnvoll einsetzen."
    ]
  },
  {
    id: "algorithms-and-data-structures",
    area: "PROGRAMMING",
    title: "Algorithmen und Datenstrukturen",
    schoolLevel: "Pruefungsniveau",
    examFocus: "AP2",
    lesson: [
      "Ein Algorithmus ist eine eindeutige Loesungsvorschrift. Eine Datenstruktur beschreibt, wie Daten organisiert werden. Beides entscheidet darueber, ob ein Programm einfach, schnell und korrekt arbeitet.",
      "Typische Datenstrukturen sind Array, Set, Map, Stack und Queue. Typische Algorithmen sind Suchen, Sortieren, Filtern und Aggregieren.",
      "In der AP2 musst du Pseudocode verstehen, Randfaelle erkennen und Algorithmen in Code oder Worte uebertragen."
    ],
    keyTerms: [
      "Algorithmus",
      "Pseudocode",
      "Array",
      "Map",
      "Set",
      "Stack",
      "Queue",
      "lineare Suche",
      "binaere Suche",
      "Komplexitaet"
    ],
    remember: [
      "Binaere Suche funktioniert nur mit sortierten Daten.",
      "Randfaelle sind oft pruefungsentscheidend.",
      "Ein einfacher korrekter Algorithmus ist besser als ein komplizierter falscher."
    ],
    schoolExercises: [
      "Implementiere lineare Suche fuer eine Liste von Zahlen.",
      "Sortiere Topics nach Fortschritt und erklaere deine Sortierlogik.",
      "Leite Testfaelle fuer leere Liste, ein Element und doppelte Werte ab."
    ],
    examTasks: [
      "Beschreibe binaere Suche in eigenen Worten.",
      "Erklaere, warum ein Algorithmus bei leerer Eingabe nicht abstuerzen darf.",
      "Wandle einfachen Pseudocode in TypeScript um."
    ],
    selfCheck: [
      "Ich kann einen Algorithmus schrittweise erklaeren.",
      "Ich kenne typische Datenstrukturen und ihren Einsatz.",
      "Ich denke bei Aufgaben an Randfaelle."
    ]
  },
  {
    id: "oop-and-uml",
    area: "PROGRAMMING",
    title: "Objektorientierung und UML",
    schoolLevel: "Mittelstufe",
    examFocus: "AP2",
    lesson: [
      "Objektorientierung modelliert Software mit Objekten. Eine Klasse ist ein Bauplan, ein Objekt ist eine konkrete Instanz. Klassen enthalten Attribute und Methoden.",
      "UML hilft, Strukturen sichtbar zu machen. In Klassendiagrammen erkennst du Attribute, Methoden, Sichtbarkeiten und Beziehungen.",
      "Nicht jede Beziehung ist Vererbung. Oft ist eine einfache Assoziation fachlich richtiger."
    ],
    keyTerms: [
      "Klasse",
      "Objekt",
      "Attribut",
      "Methode",
      "Kapselung",
      "Vererbung",
      "Polymorphie",
      "Assoziation",
      "Kardinalitaet",
      "UML"
    ],
    remember: [
      "Klasse ist Bauplan, Objekt ist konkrete Auspraegung.",
      "Attribute speichern Zustand, Methoden beschreiben Verhalten.",
      "Kardinalitaeten zeigen, wie viele Objekte beteiligt sein koennen."
    ],
    schoolExercises: [
      "Modelliere User und Topic als UML-Klassendiagramm.",
      "Erklaere, warum Topic zu User gehoert.",
      "Finde drei Beispiele fuer 1:n-Beziehungen im Alltag."
    ],
    examTasks: [
      "Unterscheide Vererbung und Assoziation.",
      "Lies ein kleines UML-Diagramm und beschreibe die Klassen.",
      "Nenne Vorteile von Kapselung."
    ],
    selfCheck: [
      "Ich kann Klassen, Objekte, Attribute und Methoden unterscheiden.",
      "Ich kann einfache UML-Diagramme lesen.",
      "Ich kann Beziehungen zwischen Fachobjekten begruenden."
    ]
  },
  {
    id: "database-sql-modeling",
    area: "DATABASES",
    title: "Datenbanken, SQL und Datenmodellierung",
    schoolLevel: "Mittelstufe",
    examFocus: "AP2",
    lesson: [
      "Relationale Datenbanken speichern Daten in Tabellen. Jede Tabelle sollte einen Primaerschluessel haben. Fremdschluessel verbinden Tabellen miteinander.",
      "SQL ist die Sprache fuer Datenabfragen und Datenveraenderungen. Die wichtigsten Befehle sind SELECT, INSERT, UPDATE und DELETE.",
      "Datenmodellierung bedeutet, Informationen so zu strukturieren, dass sie korrekt, ohne unnoetige Dopplung und gut abfragbar gespeichert werden."
    ],
    keyTerms: [
      "Tabelle",
      "Datensatz",
      "Primaerschluessel",
      "Fremdschluessel",
      "Relation",
      "Normalisierung",
      "SELECT",
      "JOIN",
      "WHERE",
      "Index"
    ],
    remember: [
      "Primaerschluessel identifizieren Datensaetze eindeutig.",
      "Fremdschluessel bilden Beziehungen.",
      "Normalisierung reduziert unnoetige Redundanz."
    ],
    schoolExercises: [
      "Zeichne ein ER-Modell fuer User, Topic und LearningModule.",
      "Schreibe ein SELECT fuer alle Topics mit progress unter 50.",
      "Erklaere den Unterschied zwischen WHERE und ORDER BY."
    ],
    examTasks: [
      "Beschreibe eine 1:n-Beziehung anhand von User und Topic.",
      "Erklaere, warum Daten nicht doppelt gespeichert werden sollten.",
      "Schreibe eine SQL-Abfrage mit JOIN in Worten."
    ],
    selfCheck: [
      "Ich kann Tabellen und Beziehungen entwerfen.",
      "Ich kann einfache SQL-Abfragen erklaeren.",
      "Ich verstehe Primaer- und Fremdschluessel."
    ]
  },
  {
    id: "backend-api",
    area: "WEB",
    title: "Backend, REST-API und Validierung",
    schoolLevel: "Mittelstufe",
    examFocus: "AP2",
    lesson: [
      "Das Backend verarbeitet Anfragen, prueft Eingaben, fuehrt Businesslogik aus und greift auf die Datenbank zu. In ExamPilot macht das Express mit Routen, Controllern und Services.",
      "REST nutzt HTTP-Methoden wie GET, POST, PUT und DELETE. Der Statuscode sagt dem Client, ob die Anfrage erfolgreich war.",
      "Validierung ist Pflicht: Das Backend darf nicht blind vertrauen, was aus dem Frontend kommt."
    ],
    keyTerms: [
      "Backend",
      "API",
      "REST",
      "Route",
      "Controller",
      "Service",
      "Middleware",
      "Statuscode",
      "JSON",
      "Validierung"
    ],
    remember: [
      "GET liest, POST erstellt, PUT aktualisiert, DELETE loescht.",
      "400 bedeutet ungueltige Anfrage, 401 nicht angemeldet, 404 nicht gefunden.",
      "Validierung gehoert ins Backend."
    ],
    schoolExercises: [
      "Verfolge POST /api/topics vom Frontend bis zum Prisma-Aufruf.",
      "Erstelle eine Tabelle mit HTTP-Methoden und ihrer Bedeutung.",
      "Finde im Code ein Beispiel fuer Middleware."
    ],
    examTasks: [
      "Erklaere den Unterschied zwischen 401 und 403.",
      "Beschreibe, warum eine API Eingaben validieren muss.",
      "Nenne Vor- und Nachteile einer REST-API."
    ],
    selfCheck: [
      "Ich kann einen Request-Flow erklaeren.",
      "Ich kenne wichtige HTTP-Methoden und Statuscodes.",
      "Ich verstehe den Zweck von Validierung."
    ]
  },
  {
    id: "frontend-react",
    area: "WEB",
    title: "Frontend mit React",
    schoolLevel: "Mittelstufe",
    examFocus: "AP2",
    lesson: [
      "Das Frontend ist die Benutzeroberflaeche im Browser. React baut diese Oberflaeche aus Komponenten. Komponenten bekommen Daten, verwalten Zustand und reagieren auf Benutzeraktionen.",
      "State beschreibt veraenderliche Daten in der Oberflaeche, zum Beispiel Formulareingaben oder geladene Topics. useEffect wird genutzt, um beim Laden einer Seite Daten zu holen.",
      "Axios sendet HTTP-Anfragen an das Backend. Der JWT-Token wird im Request-Interceptor automatisch als Authorization Header mitgeschickt."
    ],
    keyTerms: [
      "Komponente",
      "Props",
      "State",
      "useState",
      "useEffect",
      "Routing",
      "Formular",
      "Axios",
      "localStorage",
      "Token"
    ],
    remember: [
      "State-Aenderungen rendern die Oberflaeche neu.",
      "API-Aufrufe sind asynchron.",
      "Frontend-Pruefungen ersetzen keine Backend-Sicherheit."
    ],
    schoolExercises: [
      "Erklaere, wie DashboardPage Topics laedt.",
      "Baue eine kleine Fehlermeldung fuer fehlgeschlagene Topic-Erstellung.",
      "Aendere eine Komponente so, dass sie eine neue Prop nutzt."
    ],
    examTasks: [
      "Unterscheide Frontend-State und Datenbankdaten.",
      "Erklaere, warum ein Token im Header gesendet wird.",
      "Beschreibe den Ablauf vom Klick auf Speichern bis zur Anzeige des neuen Topics."
    ],
    selfCheck: [
      "Ich kann React-Komponenten lesen.",
      "Ich verstehe useState und useEffect grundlegend.",
      "Ich kann API-Aufrufe im Frontend nachvollziehen."
    ]
  },
  {
    id: "security-and-auth",
    area: "WEB",
    title: "Authentifizierung, Autorisierung und Sicherheit",
    schoolLevel: "Pruefungsniveau",
    examFocus: "AP1 + AP2",
    lesson: [
      "Authentifizierung klaert: Wer bist du? Autorisierung klaert: Was darfst du? In ExamPilot meldet sich ein Benutzer an und bekommt einen JWT.",
      "Passwoerter duerfen nie im Klartext gespeichert werden. bcrypt erzeugt einen Hash. Beim Login wird das eingegebene Passwort mit dem Hash verglichen.",
      "Sicherheit besteht aus vielen Schichten: Eingabevalidierung, Rechtepruefung, sichere Passwoerter, HTTPS, Secrets, Logging, Updates und Backups."
    ],
    keyTerms: [
      "Authentifizierung",
      "Autorisierung",
      "JWT",
      "Hash",
      "bcrypt",
      "Secret",
      "MFA",
      "CORS",
      "DSGVO",
      "Least Privilege"
    ],
    remember: [
      "Passwoerter werden gehasht, nicht verschluesselt gespeichert.",
      "Ein JWT ist ein Nachweis fuer eine erfolgreiche Anmeldung.",
      "Secrets gehoeren nicht ins Git-Repository."
    ],
    schoolExercises: [
      "Verfolge den Login im Code von Route bis Token.",
      "Erklaere, was passiert, wenn ein falsches Passwort eingegeben wird.",
      "Liste fuenf Sicherheitsmassnahmen fuer eine Web-App."
    ],
    examTasks: [
      "Unterscheide Authentifizierung und Autorisierung.",
      "Erklaere, warum Passwort-Hashing wichtig ist.",
      "Nenne Risiken, wenn JWT-Secrets oeffentlich werden."
    ],
    selfCheck: [
      "Ich kann Login und Token-Pruefung erklaeren.",
      "Ich weiss, warum Passwort-Hashing noetig ist.",
      "Ich kann grundlegende Web-Sicherheitsmassnahmen nennen."
    ]
  },
  {
    id: "testing-quality",
    area: "PROJECT",
    title: "Testing, Qualitaet und Fehlermanagement",
    schoolLevel: "Pruefungsniveau",
    examFocus: "AP2",
    lesson: [
      "Tests pruefen, ob Software wie erwartet funktioniert. Unit-Tests pruefen kleine Einheiten, Integrationstests pruefen Zusammenspiel, E2E-Tests pruefen komplette Nutzerablaeufe.",
      "Qualitaet bedeutet auch Lesbarkeit, Wartbarkeit, klare Fehlerbehandlung und reproduzierbare Builds.",
      "Fehler sollen kontrolliert behandelt werden. Nutzer bekommen verstaendliche Meldungen, Entwickler bekommen genug Informationen zur Analyse."
    ],
    keyTerms: [
      "Unit-Test",
      "Integrationstest",
      "E2E-Test",
      "Testfall",
      "Soll-Ergebnis",
      "Regression",
      "Logging",
      "Fehlerbehandlung",
      "CI"
    ],
    remember: [
      "Tests beweisen nicht Fehlerfreiheit, sie reduzieren Risiko.",
      "Negative Testfaelle sind genauso wichtig wie positive.",
      "CI hilft, Fehler frueh zu finden."
    ],
    schoolExercises: [
      "Erweitere den Health-Test um die Message.",
      "Entwirf Testfaelle fuer Registrierung mit ungueltiger E-Mail.",
      "Erklaere, was bei einem 500-Fehler passieren sollte."
    ],
    examTasks: [
      "Unterscheide Unit-, Integrations- und E2E-Test.",
      "Leite Testfaelle aus einer User Story ab.",
      "Beschreibe den Nutzen einer CI-Pipeline."
    ],
    selfCheck: [
      "Ich kann Testarten unterscheiden.",
      "Ich kann sinnvolle Testfaelle formulieren.",
      "Ich verstehe, warum CI zur Qualitaetssicherung gehoert."
    ]
  },
  {
    id: "software-project",
    area: "PROJECT",
    title: "Softwareprojekt planen und umsetzen",
    schoolLevel: "Pruefungsniveau",
    examFocus: "AP2",
    lesson: [
      "In AP2 Anwendungsentwicklung ist das Projekt zentral. Du musst zeigen, dass du Anforderungen analysierst, Loesungen planst, umsetzt, testest und dokumentierst.",
      "Gute Projektarbeit enthaelt Ist-Analyse, Ziel, Abgrenzung, Alternativen, Entscheidung, Zeitplanung, Kostenbetrachtung, Umsetzung, Tests und Ergebnis.",
      "Im Fachgespraech wird geprueft, ob du deine Entscheidungen wirklich verstanden hast."
    ],
    keyTerms: [
      "Projektantrag",
      "Ist-Analyse",
      "Soll-Konzept",
      "User Story",
      "Akzeptanzkriterium",
      "Risiko",
      "Zeitplanung",
      "Kosten",
      "Dokumentation",
      "Fachgespraech"
    ],
    remember: [
      "Nicht nur was du gemacht hast zaehlt, sondern warum.",
      "Entscheidungen brauchen fachliche und wirtschaftliche Begruendung.",
      "Tests und Nachweise gehoeren in die Dokumentation."
    ],
    schoolExercises: [
      "Formuliere ExamPilot als moegliches Projektziel.",
      "Schreibe drei User Stories fuer einen Lerntrainer.",
      "Erstelle eine grobe Projektzeitplanung mit Analyse, Umsetzung, Test und Doku."
    ],
    examTasks: [
      "Erklaere den Unterschied zwischen Lastenheft und Pflichtenheft.",
      "Nenne typische Risiken in einem Softwareprojekt.",
      "Begruende eine technische Entscheidung anhand von Alternativen."
    ],
    selfCheck: [
      "Ich kann ein Projektziel klar formulieren.",
      "Ich kann Entscheidungen begruenden.",
      "Ich weiss, welche Teile in eine Projektdokumentation gehoeren."
    ]
  },
  {
    id: "deployment-devops",
    area: "PROJECT",
    title: "Deployment, Betrieb und DevOps-Grundlagen",
    schoolLevel: "Mittelstufe",
    examFocus: "AP2",
    lesson: [
      "Software muss nicht nur entwickelt, sondern auch betrieben werden. Dazu gehoeren Build, Konfiguration, Datenbank, Logs, Monitoring, Updates und Backups.",
      "Umgebungsvariablen trennen Code von Umgebung. Lokal nutzt du andere Werte als in Produktion.",
      "Docker und CI/CD helfen, Anwendungen reproduzierbar zu starten und automatisch zu pruefen."
    ],
    keyTerms: [
      "Build",
      "Deployment",
      "Environment",
      "Docker",
      "Container",
      "CI/CD",
      "Logging",
      "Monitoring",
      "Backup",
      "Rollback"
    ],
    remember: [
      "Konfiguration gehoert nicht hart in den Code.",
      "Ein Deployment braucht Rueckfallplan.",
      "Backups sind nur wertvoll, wenn Restore getestet ist."
    ],
    schoolExercises: [
      "Erklaere die Werte in backend/.env.example.",
      "Beschreibe, was docker-compose.yml fuer PostgreSQL macht.",
      "Oeffne die GitHub Actions CI-Datei und erklaere die Schritte."
    ],
    examTasks: [
      "Nenne Vorteile von Containern.",
      "Erklaere, warum Umgebungsvariablen genutzt werden.",
      "Beschreibe eine einfache Backup-Strategie."
    ],
    selfCheck: [
      "Ich kann Build und Deployment unterscheiden.",
      "Ich verstehe den Zweck von Environment-Variablen.",
      "Ich kenne Grundideen von CI/CD."
    ]
  },
  {
    id: "wiso-work-and-economy",
    area: "WISO",
    title: "WiSo: Arbeit, Recht und Wirtschaft",
    schoolLevel: "Grundlagen",
    examFocus: "AP2",
    lesson: [
      "WiSo prueft Grundlagen der Arbeitswelt. Dazu gehoeren Ausbildung, Arbeitsvertrag, Sozialversicherung, Mitbestimmung, Tarifrecht, Unternehmensformen und wirtschaftliche Zusammenhaenge.",
      "Viele WiSo-Fragen sind Begriffs- und Verstaendnisfragen. Du musst kurz und korrekt erklaeren koennen.",
      "Wichtig ist, Rechte und Pflichten aus Sicht von Arbeitnehmern, Auszubildenden und Arbeitgebern zu verstehen."
    ],
    keyTerms: [
      "Ausbildungsvertrag",
      "Arbeitsvertrag",
      "Sozialversicherung",
      "Betriebsrat",
      "Tarifvertrag",
      "Kuendigung",
      "GmbH",
      "Markt",
      "Angebot",
      "Nachfrage"
    ],
    remember: [
      "Sozialversicherung besteht aus Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung.",
      "Tarifvertraege regeln Arbeitsbedingungen zwischen Arbeitgeberseite und Gewerkschaften.",
      "Azubis haben Rechte und Pflichten."
    ],
    schoolExercises: [
      "Erklaere die fuenf Zweige der Sozialversicherung.",
      "Vergleiche GmbH und Einzelunternehmen.",
      "Nenne drei Rechte und drei Pflichten von Auszubildenden."
    ],
    examTasks: [
      "Erklaere den Zweck eines Betriebsrats.",
      "Beschreibe, was ein Tarifvertrag regelt.",
      "Unterscheide Brutto- und Nettogehalt."
    ],
    selfCheck: [
      "Ich kann wichtige WiSo-Begriffe erklaeren.",
      "Ich kenne Rechte und Pflichten in der Ausbildung.",
      "Ich kann Sozialversicherung und Unternehmensformen einordnen."
    ]
  }
];
