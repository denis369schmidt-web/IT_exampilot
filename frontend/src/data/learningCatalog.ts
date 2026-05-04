export type LearningTrack = "AP1" | "AP2" | "PROGRAMMING" | "WISO";

export interface QuizQuestion {
  question: string;
  answer: string;
}

export interface LearningModule {
  id: string;
  track: LearningTrack;
  title: string;
  examPart: "AP1" | "AP2";
  level: "Grundlagen" | "Pruefungsnah" | "Projekt";
  whyItMatters: string;
  explanation: string[];
  examples: string[];
  examTips: string[];
  learn: string[];
  practice: string[];
  quiz: QuizQuestion[];
  proof: string;
}

export const learningCatalog: LearningModule[] = [
  {
    id: "ap1-workplace-requirements",
    track: "AP1",
    title: "Kundenbedarf und IT-Arbeitsplatz planen",
    examPart: "AP1",
    level: "Grundlagen",
    whyItMatters:
      "AP1 prueft, ob du einen IT-gestuetzten Arbeitsplatz fachlich und wirtschaftlich planen kannst.",
    explanation: [
      "Ein IT-Arbeitsplatz besteht aus Hardware, Software, Netzwerkzugang, Benutzerkonto, Berechtigungen, Sicherheit und Support. In AP1 geht es oft darum, aus einer Kundensituation die passende Ausstattung abzuleiten.",
      "Wichtig ist nicht die teuerste Loesung, sondern die begruendete Loesung: Was braucht der Nutzer wirklich? Welche Anforderungen sind Pflicht? Welche sind nice-to-have? Welche Kosten entstehen einmalig und laufend?"
    ],
    examples: [
      "Ein Entwickler braucht meist mehr RAM, SSD-Speicher, zwei Monitore, IDE, Git und Zugriff auf Entwicklungsumgebungen.",
      "Ein Bueroarbeitsplatz braucht Office, Browser, Mail, Druckerzugang, Telefonie und meist geringere Hardwareleistung.",
      "Ein mobiler Arbeitsplatz braucht VPN, Laufwerksverschluesselung, MFA und klare Regeln fuer Datenschutz."
    ],
    examTips: [
      "Immer Anforderung, Loesung und Begruendung verbinden.",
      "Bei Beschaffung an Kosten, Garantie, Lieferzeit, Kompatibilitaet und Nachhaltigkeit denken.",
      "Datenschutz und IT-Sicherheit nie vergessen, auch wenn die Aufgabe technisch wirkt."
    ],
    learn: [
      "Kundenanforderungen aufnehmen und priorisieren",
      "Hardware, Software und Peripherie passend auswaehlen",
      "Angebote vergleichen und Beschaffung begruenden",
      "Arbeitsplaetze nach Datenschutz und IT-Sicherheit bewerten"
    ],
    practice: [
      "Erstelle eine Ausstattungsliste fuer einen Azubi-Arbeitsplatz.",
      "Vergleiche zwei Notebooks anhand von Preis, RAM, CPU, Garantie und Einsatzzweck.",
      "Formuliere drei Rueckfragen an einen Kunden mit unklarer Anforderung."
    ],
    quiz: [
      {
        question: "Warum reicht es nicht, einfach den leistungsstaerksten PC zu empfehlen?",
        answer: "Weil eine Loesung wirtschaftlich, passend zum Bedarf und begruendbar sein muss."
      },
      {
        question: "Welche Rueckfrage stellst du, wenn ein Kunde nur sagt: Der PC soll schnell sein?",
        answer: "Welche Programme und Aufgaben sollen damit ausgefuehrt werden?"
      }
    ],
    proof: "Du kannst eine Arbeitsplatz-Empfehlung begruenden und Kosten/Nutzen erklaeren."
  },
  {
    id: "ap1-hardware-os",
    track: "AP1",
    title: "Hardware, Betriebssysteme und Fehlersuche",
    examPart: "AP1",
    level: "Grundlagen",
    whyItMatters:
      "Du musst typische Komponenten kennen und einfache Stoerungen logisch eingrenzen koennen.",
    explanation: [
      "Hardware-Komponenten haben klare Aufgaben: CPU verarbeitet Befehle, RAM haelt aktive Daten, SSD/HDD speichert dauerhaft, Mainboard verbindet alles, Netzteil versorgt Komponenten.",
      "Ein Betriebssystem verwaltet Hardware, Benutzer, Prozesse, Dateien, Treiber und Sicherheit. Ohne passende Treiber oder Rechte funktionieren viele Geraete und Programme nicht richtig."
    ],
    examples: [
      "Langsamer Start kann an HDD statt SSD, Autostart-Programmen, wenig RAM oder Malware liegen.",
      "Kein Druckerzugriff kann an Netzwerk, Treiber, Berechtigung oder Druckwarteschlange liegen.",
      "Bluescreens koennen durch Treiber, defekten RAM, Ueberhitzung oder fehlerhafte Updates entstehen."
    ],
    examTips: [
      "Bei Fehlern immer strukturiert vorgehen: Was genau geht nicht? Seit wann? Bei wem? Was wurde geaendert?",
      "Nicht sofort austauschen, erst Diagnose betreiben.",
      "Zwischen Hardwarefehler, Softwarefehler, Netzwerkfehler und Bedienfehler unterscheiden."
    ],
    learn: [
      "CPU, RAM, SSD, Mainboard, Netzteil und Peripherie erklaeren",
      "Treiber, Updates, Dienste und Benutzerrechte verstehen",
      "Grundlegende Windows-Diagnose kennen",
      "Fehler systematisch eingrenzen"
    ],
    practice: [
      "Erstelle eine Tabelle: Komponente, Aufgabe, typischer Fehler.",
      "Beschreibe die Diagnose, wenn ein Monitor kein Bild zeigt.",
      "Erklaere, warum RAM und SSD unterschiedliche Aufgaben haben."
    ],
    quiz: [
      {
        question: "Was ist der Unterschied zwischen RAM und SSD?",
        answer: "RAM ist schneller fluechtiger Arbeitsspeicher, SSD ist dauerhafter Massenspeicher."
      },
      {
        question: "Warum sind Treiber wichtig?",
        answer: "Sie ermoeglichen dem Betriebssystem die Kommunikation mit Hardware."
      }
    ],
    proof: "Du kannst bei einem Arbeitsplatzproblem eine sinnvolle Diagnose-Reihenfolge nennen."
  },
  {
    id: "ap1-network-basics",
    track: "AP1",
    title: "Netzwerkgrundlagen",
    examPart: "AP1",
    level: "Grundlagen",
    whyItMatters:
      "IP-Adressen, Subnetze, DNS, DHCP und einfache Netzwerkdiagnose tauchen in fast jeder IT-Pruefung auf.",
    explanation: [
      "Eine IP-Adresse identifiziert ein Geraet im Netzwerk. Die Subnetzmaske legt fest, welcher Teil Netzwerkanteil und welcher Teil Hostanteil ist. Das Gateway verbindet lokale Netze mit anderen Netzen, zum Beispiel dem Internet.",
      "DNS uebersetzt Namen wie example.com in IP-Adressen. DHCP verteilt automatisch IP-Konfigurationen. Wenn DNS kaputt ist, kann Internet per IP noch funktionieren, aber Namen funktionieren nicht."
    ],
    examples: [
      "192.168.1.25/24 bedeutet meist: Netzwerk 192.168.1.0, Hosts 192.168.1.1 bis 192.168.1.254.",
      "Wenn ein Client 169.254.x.x bekommt, hat DHCP wahrscheinlich nicht funktioniert.",
      "ping 8.8.8.8 testet IP-Verbindung, ping google.de testet zusaetzlich DNS."
    ],
    examTips: [
      "Bei Netzwerkfehlern Schichten denken: Kabel/WLAN, IP, Gateway, DNS, Dienst.",
      "DHCP, DNS und Gateway sauber unterscheiden.",
      "Bei Subnetzen erst Netzwerkadresse, Broadcast und Hostbereich bestimmen."
    ],
    learn: [
      "IPv4-Adresse, Subnetzmaske, Gateway und DNS unterscheiden",
      "DHCP und statische IP-Konfiguration erklaeren",
      "Switch, Router, Access Point und Firewall unterscheiden",
      "ping, ipconfig und tracert sinnvoll einsetzen"
    ],
    practice: [
      "Berechne Netzwerkadresse und Hostbereich fuer /24, /25 und /26.",
      "Skizziere ein kleines Firmennetz mit Client, Switch, Router und Server.",
      "Beschreibe, was du pruefst, wenn ein Client kein Internet hat."
    ],
    quiz: [
      {
        question: "Wofuer ist DNS da?",
        answer: "DNS uebersetzt Domainnamen in IP-Adressen."
      },
      {
        question: "Was macht ein Gateway?",
        answer: "Es leitet Daten aus dem lokalen Netzwerk in andere Netzwerke weiter."
      }
    ],
    proof: "Du kannst typische Netzwerkfehler systematisch eingrenzen."
  },
  {
    id: "ap1-security-privacy",
    track: "AP1",
    title: "IT-Sicherheit und Datenschutz",
    examPart: "AP1",
    level: "Pruefungsnah",
    whyItMatters:
      "Sicherheit und Datenschutz sind gemeinsame Kernkompetenzen aller IT-Berufe.",
    explanation: [
      "IT-Sicherheit schuetzt Systeme und Daten. Die wichtigsten Schutzziele sind Vertraulichkeit, Integritaet und Verfuegbarkeit. Datenschutz schuetzt personenbezogene Daten und fragt: Darf ich diese Daten verarbeiten, wofuer und wie lange?",
      "Viele Massnahmen sind organisatorisch und technisch zugleich: Rechtekonzept, Updates, Backups, MFA, Verschluesselung, Protokollierung und Schulung."
    ],
    examples: [
      "Vertraulichkeit: Nur berechtigte Personen duerfen Kundendaten sehen.",
      "Integritaet: Daten duerfen nicht unbemerkt veraendert werden.",
      "Verfuegbarkeit: Systeme muessen bei Bedarf nutzbar sein, zum Beispiel durch Backups und Redundanz."
    ],
    examTips: [
      "Bei Datenschutz immer personenbezogene Daten erkennen.",
      "Bei Sicherheit immer Risiko plus Massnahme nennen.",
      "Backups sind erst gut, wenn Wiederherstellung getestet wurde."
    ],
    learn: [
      "Schutzziele Vertraulichkeit, Integritaet und Verfuegbarkeit",
      "Passwortsicherheit, MFA, Rollen und Rechte",
      "Backups, Updates, Malware-Schutz und Awareness",
      "Personenbezogene Daten und Grundprinzipien der DSGVO"
    ],
    practice: [
      "Entwirf ein Backup-Konzept nach der 3-2-1-Regel.",
      "Bewerte, welche Daten in einer Kundendatenbank personenbezogen sind.",
      "Erstelle eine Checkliste fuer sichere Account-Anlage."
    ],
    quiz: [
      {
        question: "Was bedeutet Integritaet?",
        answer: "Daten sind korrekt, vollstaendig und nicht unbemerkt veraendert."
      },
      {
        question: "Warum reicht ein Backup allein nicht?",
        answer: "Weil auch die Wiederherstellung regelmaessig getestet werden muss."
      }
    ],
    proof: "Du kannst Risiken benennen und passende Schutzmassnahmen begruenden."
  },
  {
    id: "programming-typescript-basics",
    track: "PROGRAMMING",
    title: "Programmieren mit TypeScript",
    examPart: "AP2",
    level: "Grundlagen",
    whyItMatters:
      "Als Anwendungsentwickler musst du Code lesen, schreiben, testen und Fehler erklaeren koennen.",
    explanation: [
      "TypeScript ist JavaScript mit Typen. Typen helfen dir, Fehler frueh zu erkennen: Eine Funktion, die eine Zahl erwartet, soll keinen Text bekommen. Das macht groessere Anwendungen stabiler.",
      "Wichtige Bausteine sind Variablen, Funktionen, Objekte, Arrays, Bedingungen, Schleifen und Module. In ExamPilot siehst du das in React-Komponenten, API-Dateien und Backend-Services."
    ],
    examples: [
      "type Status = 'NOT_STARTED' | 'IN_PROGRESS' | 'DONE' erlaubt nur diese drei Werte.",
      "function average(values: number[]) sagt: Diese Funktion erwartet eine Liste von Zahlen.",
      "import { api } from './client' nutzt Code aus einer anderen Datei."
    ],
    examTips: [
      "Compilerfehler langsam lesen: Datei, Zeile, Fehlertyp, erwarteter Typ, aktueller Typ.",
      "Erst Datentypen verstehen, dann Logik schreiben.",
      "Kleine Funktionen sind leichter zu testen und zu erklaeren."
    ],
    learn: [
      "Variablen, Funktionen, Objekte, Arrays und Typen",
      "Kontrollstrukturen: if, switch, Schleifen",
      "Module, Imports und Exports",
      "Fehler lesen und mit TypeScript-Typen vermeiden"
    ],
    practice: [
      "Schreibe eine Funktion, die den Durchschnitt aus Zahlen berechnet.",
      "Typisiere ein Objekt fuer ein Lernthema.",
      "Erklaere den Unterschied zwischen string, number, boolean und union types."
    ],
    quiz: [
      {
        question: "Warum nutzt man TypeScript statt nur JavaScript?",
        answer: "Damit Typfehler frueher auffallen und Code besser wartbar wird."
      },
      {
        question: "Was ist ein Array?",
        answer: "Eine geordnete Liste von Werten."
      }
    ],
    proof: "Du kannst kleine Funktionen sauber typisieren und Fehler aus Compiler-Ausgaben verstehen."
  },
  {
    id: "programming-oop",
    track: "PROGRAMMING",
    title: "Objektorientierung und sauberes Modellieren",
    examPart: "AP2",
    level: "Grundlagen",
    whyItMatters:
      "Auch wenn ExamPilot funktional geschrieben ist, musst du Klassen, Objekte und Modellierung verstehen.",
    explanation: [
      "Objektorientierung beschreibt Programme ueber Objekte mit Eigenschaften und Verhalten. Eine Klasse ist ein Bauplan, ein Objekt ist eine konkrete Instanz.",
      "Wichtige Begriffe sind Kapselung, Vererbung, Polymorphie und Abstraktion. In Pruefungen musst du oft UML-Klassendiagramme lesen oder Fachobjekte sinnvoll modellieren."
    ],
    examples: [
      "Eine Klasse User koennte email, name und login() enthalten.",
      "Eine Klasse Topic koennte title, progress und markDone() enthalten.",
      "Kapselung bedeutet: Interne Details werden versteckt, Zugriff erfolgt ueber klare Methoden."
    ],
    examTips: [
      "Bei UML auf Kardinalitaeten achten: 1, 0..1, 1..*, *.",
      "Nicht jede Beziehung ist Vererbung. Oft reicht eine Assoziation.",
      "Attribute sind Daten, Methoden sind Verhalten."
    ],
    learn: [
      "Klasse, Objekt, Attribut und Methode unterscheiden",
      "Kapselung, Vererbung, Polymorphie und Abstraktion erklaeren",
      "UML-Klassendiagramme lesen",
      "Fachobjekte aus Anforderungen ableiten"
    ],
    practice: [
      "Modelliere User und Topic als UML-Klassendiagramm.",
      "Erklaere, warum User und Topic keine Vererbungsbeziehung haben.",
      "Finde drei Attribute und zwei Methoden fuer ein Lernmodul."
    ],
    quiz: [
      {
        question: "Was ist der Unterschied zwischen Klasse und Objekt?",
        answer: "Eine Klasse ist der Bauplan, ein Objekt ist eine konkrete Instanz davon."
      },
      {
        question: "Was bedeutet Kapselung?",
        answer: "Interne Daten werden geschuetzt und ueber definierte Schnittstellen genutzt."
      }
    ],
    proof: "Du kannst ein kleines Fachproblem in Klassen, Attribute und Beziehungen zerlegen."
  },
  {
    id: "programming-algorithms",
    track: "PROGRAMMING",
    title: "Algorithmen und Datenstrukturen",
    examPart: "AP2",
    level: "Pruefungsnah",
    whyItMatters:
      "AP2 Anwendungsentwicklung enthaelt den Pruefungsbereich Entwicklung und Umsetzung von Algorithmen.",
    explanation: [
      "Ein Algorithmus ist eine eindeutige Schrittfolge zur Loesung eines Problems. Datenstrukturen bestimmen, wie Daten gespeichert und verarbeitet werden. Gute Entwickler waehlen beides passend zum Problem.",
      "In AP2 musst du haeufig Pseudocode verstehen, Ablauflogik nachvollziehen, Fehler finden oder eine einfache Funktion entwickeln."
    ],
    examples: [
      "Lineare Suche prueft Element fuer Element.",
      "Binaere Suche ist schneller, funktioniert aber nur auf sortierten Daten.",
      "Eine Map eignet sich, wenn du Werte schnell ueber einen Schluessel finden willst."
    ],
    examTips: [
      "Immer Randfaelle testen: leere Liste, ein Element, doppelte Werte, ungueltige Eingaben.",
      "Bei Sortierung fragen: Muss stabil sortiert werden? Welche Reihenfolge?",
      "Pseudocode erst in Worte uebersetzen, dann in Code."
    ],
    learn: [
      "Arrays, Maps, Sets, Stacks und Queues",
      "Suchen, Sortieren und einfache Laufzeitbetrachtung",
      "Pseudocode und Struktogramm lesen",
      "Randfaelle und Testfaelle ableiten"
    ],
    practice: [
      "Implementiere lineare Suche und binaere Suche.",
      "Sortiere eine Liste von Topics nach Fortschritt.",
      "Schreibe Testfaelle fuer leere Liste, ein Element und doppelte Werte."
    ],
    quiz: [
      {
        question: "Warum ist binaere Suche schneller als lineare Suche?",
        answer: "Weil der Suchbereich in jedem Schritt halbiert wird."
      },
      {
        question: "Wann funktioniert binaere Suche nicht?",
        answer: "Wenn die Daten nicht sortiert sind."
      }
    ],
    proof: "Du kannst einen Algorithmus in Worten, Pseudocode und TypeScript darstellen."
  },
  {
    id: "programming-databases",
    track: "PROGRAMMING",
    title: "Datenbanken, SQL und Prisma",
    examPart: "AP2",
    level: "Grundlagen",
    whyItMatters:
      "Viele AP2-Aufgaben pruefen Datenmodelle, SQL-Verstaendnis und sinnvolle Beziehungen zwischen Daten.",
    explanation: [
      "Relationale Datenbanken speichern Daten in Tabellen. Jede Zeile ist ein Datensatz, jede Spalte ein Feld. Primaerschluessel identifizieren Datensaetze eindeutig, Fremdschluessel verbinden Tabellen.",
      "Prisma ist ein ORM. Es uebersetzt TypeScript-Aufrufe wie prisma.topic.findMany in Datenbankabfragen. Du solltest trotzdem SQL-Grundlagen verstehen."
    ],
    examples: [
      "User hat viele Topics: Das ist eine 1:n-Beziehung.",
      "Topic.userId ist ein Fremdschluessel auf User.id.",
      "SELECT * FROM Topic WHERE userId = '...' liest alle Topics eines Users."
    ],
    examTips: [
      "Bei Datenmodellen immer Primaerschluessel und Fremdschluessel markieren.",
      "Normalisierung verhindert unnoetige doppelte Daten.",
      "Bei Loeschregeln auf fachliche Folgen achten."
    ],
    learn: [
      "Tabellen, Primaerschluessel, Fremdschluessel und Relationen",
      "SELECT, INSERT, UPDATE, DELETE",
      "1:n-Beziehung zwischen User und Topic",
      "Warum Prisma als ORM zwischen Code und Datenbank sitzt"
    ],
    practice: [
      "Erklaere, warum Topic ein userId-Feld hat.",
      "Schreibe ein SQL SELECT fuer alle Topics eines Users.",
      "Zeichne ein ER-Modell fuer User und Topic."
    ],
    quiz: [
      {
        question: "Was ist ein Fremdschluessel?",
        answer: "Ein Feld, das auf den Primaerschluessel einer anderen Tabelle verweist."
      },
      {
        question: "Was bedeutet 1:n?",
        answer: "Ein Datensatz auf der einen Seite kann viele Datensaetze auf der anderen Seite haben."
      }
    ],
    proof: "Du kannst ein kleines Datenmodell entwerfen und Datenzugriffe erklaeren."
  },
  {
    id: "ap2-web-architecture",
    track: "AP2",
    title: "Web, HTTP, REST und JSON",
    examPart: "AP2",
    level: "Pruefungsnah",
    whyItMatters:
      "Moderne Anwendungsentwicklung bedeutet, Frontend, API, Datenbank und Deployment zusammenzudenken.",
    explanation: [
      "Das Frontend laeuft im Browser und zeigt die Oberflaeche. Das Backend stellt Daten und Logik ueber HTTP bereit. REST nutzt klare URLs und HTTP-Methoden, zum Beispiel GET zum Lesen und POST zum Erstellen.",
      "JSON ist ein Datenformat fuer den Austausch zwischen Browser und API. Statuscodes zeigen, ob eine Anfrage erfolgreich war oder warum sie gescheitert ist."
    ],
    examples: [
      "GET /api/topics liest Themen.",
      "POST /api/topics erstellt ein Thema.",
      "401 bedeutet nicht authentifiziert, 404 bedeutet nicht gefunden, 500 bedeutet Serverfehler."
    ],
    examTips: [
      "HTTP-Methode, URL, Body und Statuscode zusammen betrachten.",
      "Frontend-State ist nicht automatisch Datenbank-State.",
      "Bei API-Design konsistente Namen und Fehlerantworten verwenden."
    ],
    learn: [
      "Client-Server-Prinzip und REST",
      "HTTP-Methoden, Statuscodes und JSON",
      "Frontend-State und Backend-Persistenz unterscheiden",
      "Build, Environment und CI grob erklaeren"
    ],
    practice: [
      "Zeichne den Request-Flow beim Erstellen eines Topics.",
      "Erklaere den Unterschied zwischen 200, 201, 400, 401 und 500.",
      "Finde in ExamPilot je ein Beispiel fuer Route, Controller, Service und API-Client."
    ],
    quiz: [
      {
        question: "Welche HTTP-Methode nutzt man typischerweise zum Erstellen?",
        answer: "POST."
      },
      {
        question: "Was ist JSON?",
        answer: "Ein textbasiertes Datenformat zum Austausch strukturierter Daten."
      }
    ],
    proof: "Du kannst eine Web-App von Klick bis Datenbank erklaeren."
  },
  {
    id: "ap2-software-product",
    track: "AP2",
    title: "Softwareprodukt planen",
    examPart: "AP2",
    level: "Pruefungsnah",
    whyItMatters:
      "AP2 fragt nicht nur Code ab, sondern auch Planung, Anforderungen, Qualitaet und Wirtschaftlichkeit.",
    explanation: [
      "Softwareplanung beginnt mit Anforderungen. Eine gute Anforderung ist klar, pruefbar und fachlich begruendet. Danach folgen Architektur, Datenmodell, Oberflaeche, Tests, Aufwand und Risiken.",
      "In der Pruefung geht es oft darum, fachlich sinnvolle Entscheidungen zu treffen und sie zu begruenden."
    ],
    examples: [
      "User Story: Als Azubi moechte ich Lernthemen abhaken, damit ich meinen Fortschritt sehe.",
      "Akzeptanzkriterium: Wenn Fortschritt 100 Prozent ist, wird der Status DONE gesetzt.",
      "Risiko: Ohne Datenbankbackup gehen Lernfortschritte verloren."
    ],
    examTips: [
      "Anforderungen immer testbar formulieren.",
      "Bei Alternativen Vor- und Nachteile nennen.",
      "Wirtschaftlichkeit und Wartbarkeit gehoeren zur technischen Entscheidung."
    ],
    learn: [
      "User Stories und Akzeptanzkriterien",
      "Pflichtenheft, Lastenheft und technische Konzepte",
      "Aufwand schaetzen und Risiken benennen",
      "Qualitaetssicherung, Teststrategie und Dokumentation"
    ],
    practice: [
      "Schreibe drei User Stories fuer ExamPilot.",
      "Definiere Akzeptanzkriterien fuer Login und Topic-Erstellung.",
      "Erstelle eine Risiko-Liste fuer dein Abschlussprojekt."
    ],
    quiz: [
      {
        question: "Was macht eine gute Anforderung aus?",
        answer: "Sie ist eindeutig, fachlich sinnvoll und pruefbar."
      },
      {
        question: "Warum sind Akzeptanzkriterien wichtig?",
        answer: "Sie machen klar, wann eine Anforderung erfuellt ist."
      }
    ],
    proof: "Du kannst aus einer Idee ein pruefbares Softwarekonzept machen."
  },
  {
    id: "ap2-testing-quality",
    track: "AP2",
    title: "Tests, Qualitaet und Fehlerbehandlung",
    examPart: "AP2",
    level: "Pruefungsnah",
    whyItMatters:
      "Software ist erst professionell, wenn sie getestet, wartbar und fehlertolerant ist.",
    explanation: [
      "Tests pruefen, ob Code das tut, was erwartet wird. Unit-Tests pruefen kleine Einheiten, Integrationstests pruefen Zusammenspiel, E2E-Tests pruefen den Ablauf aus Nutzersicht.",
      "Fehlerbehandlung bedeutet: Fehler erkennen, sauber melden, nicht abstuerzen und keine sensiblen Details verraten."
    ],
    examples: [
      "Der Health-Test prueft, ob /health Status 200 liefert.",
      "Zod validiert Eingaben, bevor sie in die Businesslogik gelangen.",
      "ApiError erzeugt kontrollierte HTTP-Fehler."
    ],
    examTips: [
      "Testfaelle aus Anforderungen ableiten.",
      "Positive und negative Tests nennen.",
      "Validierung, Fehlerbehandlung und Logging unterscheiden."
    ],
    learn: [
      "Unit-, Integrations- und E2E-Tests unterscheiden",
      "Testfaelle und erwartete Ergebnisse formulieren",
      "Validierung mit Zod verstehen",
      "Fehlerantworten mit Statuscodes erklaeren"
    ],
    practice: [
      "Erweitere den Health-Test um die Message.",
      "Schreibe Testideen fuer Login mit falschem Passwort.",
      "Finde alle Stellen, an denen ApiError genutzt wird."
    ],
    quiz: [
      {
        question: "Was prueft ein Unit-Test?",
        answer: "Eine kleine, moeglichst isolierte Code-Einheit."
      },
      {
        question: "Warum validiert man Eingaben?",
        answer: "Damit nur erwartete und sichere Daten verarbeitet werden."
      }
    ],
    proof: "Du kannst Testfaelle fuer ein Feature planen und Fehler sauber einordnen."
  },
  {
    id: "ap2-project-documentation",
    track: "AP2",
    title: "Projektarbeit und Dokumentation",
    examPart: "AP2",
    level: "Projekt",
    whyItMatters:
      "Das betriebliche Projekt ist der groesste AP2-Baustein in der Fachrichtung Anwendungsentwicklung.",
    explanation: [
      "Die Projektarbeit zeigt, dass du ein reales Problem analysieren, planen, umsetzen, testen und dokumentieren kannst. Nicht nur Code zaehlt, sondern auch Begruendung und Nachvollziehbarkeit.",
      "Eine gute Dokumentation zeigt Ausgangslage, Ziel, Alternativen, Entscheidung, Umsetzung, Tests, Kosten und Ergebnis."
    ],
    examples: [
      "Projektziel: Entwicklung eines Lerntrackers zur strukturierten AP-Vorbereitung.",
      "Wirtschaftlichkeit: Zeitersparnis durch zentralen Fortschrittsueberblick.",
      "Testnachweis: Registrierung, Login, Topic-Erstellung und Dashboard-Aggregation wurden geprueft."
    ],
    examTips: [
      "Projektziel messbar formulieren.",
      "Nicht nur beschreiben, was du getan hast, sondern warum.",
      "Im Fachgespraech Entscheidungen verteidigen koennen."
    ],
    learn: [
      "Projektantrag, Zieldefinition und Abgrenzung",
      "Ist-Analyse, Soll-Konzept und Entscheidungsbegruenung",
      "Zeitplanung, Kostenbetrachtung und Testnachweise",
      "Praesentation und Fachgespraech vorbereiten"
    ],
    practice: [
      "Formuliere ein Projektziel in einem Satz.",
      "Erstelle eine grobe Zeitplanung mit Analyse, Umsetzung, Test und Doku.",
      "Schreibe drei moegliche Fachgespraech-Fragen zu deinem Projekt."
    ],
    quiz: [
      {
        question: "Warum reicht eine reine Codebeschreibung in der Projektdoku nicht?",
        answer: "Weil Planung, Begruendung, Wirtschaftlichkeit, Tests und Ergebnis bewertet werden."
      },
      {
        question: "Was gehoert in eine Ist-Analyse?",
        answer: "Der aktuelle Zustand, Probleme, Rahmenbedingungen und Bedarf."
      }
    ],
    proof: "Du kannst dein Projekt fachlich, wirtschaftlich und nachvollziehbar verteidigen."
  },
  {
    id: "tools-git-ci",
    track: "PROGRAMMING",
    title: "Git, GitHub und CI",
    examPart: "AP2",
    level: "Grundlagen",
    whyItMatters:
      "Versionsverwaltung und automatische Checks gehoeren zum professionellen Arbeiten.",
    explanation: [
      "Git speichert Projektstaende als Commits. So kannst du nachvollziehen, was wann geaendert wurde. GitHub ist ein Remote-Speicher und Kollaborationswerkzeug.",
      "CI bedeutet Continuous Integration. Bei jedem Push kann automatisch gebaut und getestet werden, damit Fehler frueh auffallen."
    ],
    examples: [
      "git status zeigt geaenderte Dateien.",
      "git commit speichert einen Projektstand.",
      ".github/workflows/ci.yml baut Backend und Frontend automatisch."
    ],
    examTips: [
      "Commit-Messages sollten beschreiben, was geaendert wurde.",
      "Nie Secrets wie echte Passwoerter committen.",
      "CI ist Qualitaetssicherung, kein Ersatz fuer Denken."
    ],
    learn: [
      "Working tree, staging area und commit unterscheiden",
      "Branch, remote und push verstehen",
      "GitHub Actions grob erklaeren",
      "Lockfiles und .gitignore einordnen"
    ],
    practice: [
      "Mache eine kleine Textaenderung und committe sie.",
      "Erklaere, warum node_modules ignoriert wird.",
      "Oeffne die CI-Datei und beschreibe jeden Schritt."
    ],
    quiz: [
      {
        question: "Warum committet man node_modules nicht?",
        answer: "Weil Abhaengigkeiten aus package-lock.json reproduzierbar installiert werden koennen."
      },
      {
        question: "Was macht git push?",
        answer: "Es uebertraegt lokale Commits in ein Remote-Repository."
      }
    ],
    proof: "Du kannst deine Arbeit versionieren, pushen und CI-Ergebnisse einordnen."
  },
  {
    id: "wiso-basics",
    track: "WISO",
    title: "Wirtschafts- und Sozialkunde",
    examPart: "AP2",
    level: "Grundlagen",
    whyItMatters:
      "WiSo ist ein eigener AP2-Pruefungsbereich und kann mit systematischem Wiederholen gut abgesichert werden.",
    explanation: [
      "WiSo prueft rechtliche, wirtschaftliche und gesellschaftliche Grundlagen der Arbeitswelt. Viele Fragen sind gut lernbar, weil sie auf festen Begriffen beruhen.",
      "Wichtige Themen sind Ausbildungsvertrag, Arbeitsvertrag, Sozialversicherung, Mitbestimmung, Tarifrecht, Unternehmensformen und Wirtschaftskreislauf."
    ],
    examples: [
      "Sozialversicherung: Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung.",
      "Auszubildende haben Rechte wie Ausbildungspflicht des Betriebs und Pflichten wie Lernpflicht und Sorgfalt.",
      "Eine GmbH ist eine Kapitalgesellschaft mit beschraenkter Haftung."
    ],
    examTips: [
      "Definitionen kurz lernen und mit Beispielen verbinden.",
      "Bei Rechenaufgaben sauber Einheiten und Prozentwerte beachten.",
      "Rechte und Pflichten immer aus Sicht beider Seiten betrachten."
    ],
    learn: [
      "Ausbildungsvertrag, Rechte und Pflichten",
      "Betriebsrat, Tarifvertrag und Mitbestimmung",
      "Sozialversicherung und Entgeltabrechnung",
      "Wirtschaftskreislauf, Unternehmensformen und Markt"
    ],
    practice: [
      "Erklaere die fuenf Zweige der Sozialversicherung.",
      "Vergleiche GmbH und Einzelunternehmen.",
      "Notiere drei Rechte und drei Pflichten von Auszubildenden."
    ],
    quiz: [
      {
        question: "Welche fuenf Zweige hat die Sozialversicherung?",
        answer: "Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung."
      },
      {
        question: "Was ist ein Tarifvertrag?",
        answer: "Eine Vereinbarung zwischen Arbeitgeberseite und Gewerkschaft ueber Arbeitsbedingungen."
      }
    ],
    proof: "Du kannst typische WiSo-Begriffe kurz, korrekt und pruefungsnah erklaeren."
  }
];

export const trackLabels: Record<LearningTrack, string> = {
  AP1: "AP1",
  AP2: "AP2",
  PROGRAMMING: "Programmieren",
  WISO: "WiSo"
};
