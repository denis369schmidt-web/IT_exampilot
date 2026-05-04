export type LearningTrack = "AP1" | "AP2" | "PROGRAMMING" | "WISO";

export interface LearningModule {
  id: string;
  track: LearningTrack;
  title: string;
  examPart: "AP1" | "AP2";
  level: "Grundlagen" | "Pruefungsnah" | "Projekt";
  whyItMatters: string;
  learn: string[];
  practice: string[];
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
    proof: "Du kannst eine Arbeitsplatz-Empfehlung begruenden und Kosten/Nutzen erklaeren."
  },
  {
    id: "ap1-network-basics",
    track: "AP1",
    title: "Netzwerkgrundlagen fuer AP1",
    examPart: "AP1",
    level: "Grundlagen",
    whyItMatters:
      "IP-Adressen, Subnetze, DNS, DHCP und einfache Netzwerkdiagnose tauchen in fast jeder IT-Pruefung auf.",
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
    proof: "Du kannst Risiken benennen und passende Schutzmassnahmen begruenden."
  },
  {
    id: "programming-typescript-basics",
    track: "PROGRAMMING",
    title: "Programmieren mit TypeScript verstehen",
    examPart: "AP2",
    level: "Grundlagen",
    whyItMatters:
      "Als Anwendungsentwickler musst du Code lesen, schreiben, testen und Fehler erklaeren koennen.",
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
    proof: "Du kannst kleine Funktionen sauber typisieren und Fehler aus Compiler-Ausgaben verstehen."
  },
  {
    id: "programming-algorithms",
    track: "PROGRAMMING",
    title: "Algorithmen und Datenstrukturen",
    examPart: "AP2",
    level: "Pruefungsnah",
    whyItMatters:
      "AP2 Anwendungsentwicklung enthaelt den Pruefungsbereich Entwicklung und Umsetzung von Algorithmen.",
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
    proof: "Du kannst ein kleines Datenmodell entwerfen und Datenzugriffe erklaeren."
  },
  {
    id: "ap2-software-product",
    track: "AP2",
    title: "Softwareprodukt planen",
    examPart: "AP2",
    level: "Pruefungsnah",
    whyItMatters:
      "AP2 fragt nicht nur Code ab, sondern auch Planung, Anforderungen, Qualitaet und Wirtschaftlichkeit.",
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
    proof: "Du kannst aus einer Idee ein pruefbares Softwarekonzept machen."
  },
  {
    id: "ap2-project-documentation",
    track: "AP2",
    title: "Projektarbeit und Dokumentation",
    examPart: "AP2",
    level: "Projekt",
    whyItMatters:
      "Das betriebliche Projekt ist der groesste AP2-Baustein in der Fachrichtung Anwendungsentwicklung.",
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
    proof: "Du kannst dein Projekt fachlich, wirtschaftlich und nachvollziehbar verteidigen."
  },
  {
    id: "ap2-web-architecture",
    track: "AP2",
    title: "Fullstack-Architektur verstehen",
    examPart: "AP2",
    level: "Pruefungsnah",
    whyItMatters:
      "Moderne Anwendungsentwicklung bedeutet, Frontend, API, Datenbank und Deployment zusammenzudenken.",
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
    proof: "Du kannst eine Web-App von Klick bis Datenbank erklaeren."
  },
  {
    id: "wiso-basics",
    track: "WISO",
    title: "Wirtschafts- und Sozialkunde",
    examPart: "AP2",
    level: "Grundlagen",
    whyItMatters:
      "WiSo ist ein eigener AP2-Pruefungsbereich und kann mit systematischem Wiederholen gut abgesichert werden.",
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
    proof: "Du kannst typische WiSo-Begriffe kurz, korrekt und pruefungsnah erklaeren."
  }
];

export const trackLabels: Record<LearningTrack, string> = {
  AP1: "AP1",
  AP2: "AP2",
  PROGRAMMING: "Programmieren",
  WISO: "WiSo"
};
