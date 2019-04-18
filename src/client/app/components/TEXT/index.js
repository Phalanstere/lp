import React, { Component } from 'react';
import * as i18n from 'i18n-for-browser';

console.log("INTERNATIONAL");


var ProgrammingEN = `In just a weekend, what can you learn about programming?
More than you ever dared to dream.
Less than what wou want to accomplish.
But enough that you may understand how a programmer
ticks ... feels ... operates`;


var t = `Was kann man an einem Wochenende über Programmierung erfahren?
Mehr als man sich zu träumen erhofft.
Weniger als nötig wäre ...
Aber genug, um zu verstehen, wie ein Programmierer tickt ... fühlt ... operiert.`



import TwinKomplexDE from './TwinKomplex_DE.txt';
import TwinKomplexEN from './TwinKomplex_EN.txt';


var EisenhowerEN = "If you can't solve a problem, enlarge it.\n(Dwight D. Eisenhower)";
var EisenhowerDE = "Wenn Sie ein Problem nicht lösen können,\nvergrößern Sie es.\n(Dwight D. Eisenhower)";

import SeminarInfo_DE from './SeminarInfo_DE.txt';

import Publishing_DE from './_lp_PublishingService_DE.txt';
import Publishing_EN from './_lp_PublishingService_EN.txt';

import Company_DE from './lp/Company_DE.txt';
import Company_EN from './lp/Company_EN.txt';



// import vita_DE from  './Vita_DE.html';
// import vita_DE from  "html-loader!./Vita_DE.html";


import SourceCode_DE from './Sourcecode.txt';



import vita_DE from  './Vita_DE.txt';
import vita_EN from  './Vita_EN.txt';

import motivation_DE from  './motivation_DE.txt';
import motivation_EN from  './motivation_EN.txt';

import computer_culture_DE from './Computerkultur_DE.txt';
import computer_culture_EN from './Computerkultur_EN.txt';

import AudioArt_DE from './AudioArt_DE.txt';


// let vita_DE = 'Martin B';

let signup_DE = 'In Kürze finden Sie hier einen Zugang, bei dem Sie sich einloggen können. Im Augenblick sind wir noch ganz altmodisch: Rufen Sie uns an, wenn Sie Interesse an einer Teilnahme haben.'
let signup_EN = 'Very soon you will have access to a portal, where you can log in and administer your da. For the time being, we are old-fashioned: Just call us if you are interested to participate,'


import Metamorphosen_DE from './Metamorphosen_DE.txt';



let Gamification_DE = "Seit dem ersten Projekt der Firma, dem Online-Game TwinKomplex (2011), gehört die Überschneidung von Spiel und Realität zur DNA der Firma. Gamification-Techniken kommen in den Seminaren, aber auch in der Architektur des Portals zum Einsatz.";
let Gamification_EN = "Since the company's first project, the online game TwinKomplex (2011), the intersection of game and reality has been part of the company's DNA. Hence, Gamification techniques are used in the seminars, but also in the architecture of the portal."

let Education_DE = "Seit 2017 veranstaltet die Firma – zusammen mit dem Northern Institute of Technology – Digital Survival Seminare für Führungskräfte. Aus dieser Initiative haben sich weitere Seminare entwickelt, zudem ist 2019 ein komplexes Lernportal hinzugekommen.";
let Education_EN = "Since 2017 Ludic Philosophy - together with the Northern Institute of Technology - has been organizing Digital Survival seminars for executives. This initiative has led to the development of more seminars and the addition of a complex learning portal in 2019.";

let Portal_DE = "Das Weiterbildungs-Portal enthält eine Reihe von frei verfügbaren Materialien. Nutzer, die zuvor an einem Seminar teilgenommen, haben Zugriff auf Unterrichtsmaterialien und Premium-Content. Die Plattform erlaubt dem Nutzer seinen eigenen Lernfortschritt zu analysieren, gibt ihm Feedback, Hilfestellungen etc."
let Portal_EN = "The advanced training portal contains a number of freely available materials. Users who have previously attended a seminar have access to premium content. The platform allows users to analyze their own learning progress, give feedback, help, etc.";


let Three_60_DE = "Weil wir nicht nur Programmierung- und Gamifizierungstechniken, sondern auch mit der Welt der Bücher vertraut sind, bietet die Firma eine Reihe von Verlagsservices an: von Lektorat, Übersetzung (Englisch, Französisch, Italienisch) bis hin zur Strategieberatung für Verlage.";
let Three_60_EN = "Because we are familiar not only with programming and gamification techniques, but also with the world of books, the company offers a range of publishing services: from editing, translation (English, French, Italian) to strategy consulting for publishers.";

let PortalTopics_DE = "Inhaltlich widmet sich das Portal Fragen, die zu kurz kommen oder, was ärger noch ist, von lärmenden Buzzwords übertönt werden. Heiße Themen anfassen, aber mit einem kühlen Blick und so, dass der Nutzer einen Überblick gewinnt – das ist der Anspruch.";
let PortalTopics_EN = "In terms of content, the portal is dedicated to questions that come too short or, what is worse, are drowned out by noisy buzzwords. Touching hot topics, but with a cool look and in such a way that the user gains an overview - that is the claim.";

let TransformationObjective_DE = "Das Portal soll den Interessenten den Einstieg in das digitale Denken vermitteln: von Programmierungsgrundlagen, Kommunikations und Internet-Strategien bis hin zu den geistigen Grundlagen der Digitalisierung.";
let TransformationObjective_EN = "The portal is intended to provide interested parties with an introduction to digital thinking: from programming basics, communication and Internet strategies to the intellectual basics of digitisation.";

let TransformationPath_DE = "Der Nutzer kann während einer Stunde mit anderen Nutzern kommunizieren, er kann aber auch seinem eigenen Lernpfad folgen. Zudem bietet ihm die Plattform eine breite Palette von individualisierten Lernhilfen.";
let TransformationPath_EN = "The user can communicate with other during a lesson, but he can also follow his own learning path. In addition, the platform offers a wide range of individualised learning aids. ";

let TransformationInteraction_DE = "Die Stunden sind hochgradig interaktiv konzipiert: In der Regel bekommt der Nutzer eine unmittelbare Rückmeldung. Zudem kommen diverse Medien zum Einsatz (Film, Audio, Info-Grafik etc.).";
let TransformationInteraction_EN = "The lessons are designed to be highly interactive: As a rule, the user receives immediate feedback. In addition, various media are used (film, audio, info graphics etc.).";

let TransformationTechnology_DE = "Dem Weiterbildungs-Portal liegt das ISLE-System zugrunde, das an der Carnegie Mellon University entwickelt wird und bei dem auch wir einen kleinen Beitrag hinzugesteuert haben. Mit diesem hochinnovativen Lehrsystem lässt sich ein Blended-Learning Kontext realisieren, es erlaubt zudem, als Editing Tool, das Design komplexer und sozial vernetzter Lektionen.";
let TransformationTechnology_EN = "The training portal is based on the ISLE system that is being developed at Carnegie Mellon University and to which we also contributed our fifty cent. With this highly innovative teaching system a blended learning context can be realized, it also allows the design of complex and socially networked lessons as an editing tool.";

let Transformation360_DE = "Ob Text, Film, Audio oder Programmierung – die Ausrichtung der Firma war von Anbeginn transmedial. Von daher versteht sich der Rundum-Blick auf die Welt des Internets, auf 360° Kommunikationstechniken, sei es in Hinsicht auf eine zielgenaue Werbekampagne oder eine umfassende strategische Beratung.";
let Transformation360_EN = "Be it text, film, audio or programming - the orientation of the company was transmedial from the beginning. This is why the company has an all-round view of the world of the Internet, of 360° communication technologies, whether in terms of a targeted advertising campaign or comprehensive strategic consulting.";

let ServicesEditing_DE = "Haben Sie ein kompliziertes Projekt, dem Sie besondere Aufmerksamkeit angedeihen lassen wollen, können Sie uns mit einem Lektorat beauftragen. Hinzu kommen Services wie Manuskript-Evaluierung, Scouting und Recherche, was bestimmte Themenbereiche anbelangt.";
let ServicesEditing_EN = "If you have a complicated project to which you want to give special attention, you can entrust us with editing tasks. In addition, there are services such as manuscript evaluation, scouting and research on specific topics.";


let ServicesTranslation_DE = "Wir arbeiten mit einem Stamm von professionellen Übersetzern, die anspruchsvolle Texte ins Deutsche bringen können. Darüberhinaus können wir – mittels Machine learning-Techniken – (redigierte oder unredigierte) Rohübersetzungen bewerkstellen – aus dem Deutschen in eine der großen Weltsprache oder vice versa.";
let ServicesTranslation_EN = "We work with a team of professional translators who can translate demanding texts into German. In addition, we can - using machine learning techniques - produce (edited or unedited) raw translations - from German into one of the major world languages or vice versa.";

let ServicesCampaign_DE = "Wenn Sie eine gezielte Social Media-Kampagne starten können, bieten wir eine Reihe von Services an: von audiovisuellem Content bis zur Nutzung unserer Inhouse-Bots.";
let ServicesCampaign_EN = "If you want to launch a targeted social media campaign, we offer a range of services from audiovisual content to the use of our in-house bots.";

let ServicesConsulting_DE = "Wie positioniere ich meinen Verlag in der digitalen Welt? Wie organisiere ich Arbeitsprozesse, bei denen sich im Laufe der Zeit, wie von selbst, eine digitale Transformation im Unternehmen ergibt? Sind Sie an einer Lösung dieser Probleme interessiert, so sprechen Sie uns an.";
let ServicesConsulting_EN = "How do I position my publishing house in the digital world? How do I organise work processes which, over the course of time, lead, as if by themselves, to a digital transformation within the company? If you are interested in a solution to these problems, please contact us.";

let SeminarFormat_DE = "Unsere Seminare, die für 5-15 Personen angelegt sind, dauern in der Regel 2 bis 2 ½ Tage. Mithilfe eines Blended Learning Systems werden die Teilnehmer durch einen Parcours geschleust. Die erlaubt einerseits hoch individuelles Arbeiten, andererseits lässt es Raum für Gruppenerfahrungen, Diskussionen, Gespräche. Ziel ist stets: aus einer begrenzten Zeit ein Maximum an praktisch verwertbaren Einsichten herauszuholen.";
let SeminarFormat_EN = "Our seminars, which are designed for 5-15 persons, usually last 2 to 2 ½ days. With the help of a blended learning system, the participants are guided through a course. On the one hand this allows highly individual work, on the other hand it leaves room for group experiences, discussions, conversations. The goal is always: to gain maximum practical insights from a limited time.";

let SeminarLocation_DE = "Unsere Seminare werden an besonders ausgesuchten Locations durchgeführt, bei denen genius loci und Thema eine besondere Allianz eingehen. Sie lassen sich bei Bedarf auch in einem innerbetrieblichen Kontext organisieren. Sprechen Sie uns an!";
let SeminarLocation_EN = "Our seminars are held at specially selected locations where genius loci and subject enter into a special alliance. If required, they can also be organised in an internal context. Talk to us!";

let SeminarPortal_DE = "Der Teilnehmer eines Seminars erwirbt zugleich die Möglichkeit, dauerhaft das Angebot des Lernportals wahrzunehmen. Dies bedeutet, dass er nicht nur auf die Seminar-Materialien zugreifen kann, sondern dass er Zugriff auf einen beständig wachsenden Corpus von Fortbildungsangeboten enthält.";
let SeminarPortal_EN = "The participant of a seminar acquires the possibility to permanently take advantage of the learning portal. This means that they not only have access to the seminar materials, but also to a constantly growing corpus of continuing education offers.";

let SeminarIdea_DE = "Die Idee des Digital Survival Lab entsprang einer Reihe von Firmenberatungen, die allesamt zeigten, dass das Thema der Digitalen Transformation vor allem als „painpoint“ in Erscheinung tritt. Dabei standen weniger konkrete Entscheidungsprobleme im Fokus als fundamentale Verständnisfragen: Was bedeutet Digitalisierung?  Welche Implikationen bringen Software-Projekte mit sich?";
let SeminarIdea_EN = "The idea of the Digital Survival Lab arose from a series of corporate consultancies, all of which showed that the topic of digital transformation appears above all as a pain point. The focus was less on concrete decision-making problems than on fundamental questions of understanding: What does digitalization mean? What are the implications of software projects?";

let Reitenbach_DE = "studierte Psychologie an der Universität Tübingen und promovierte in Psychologie an der Universität Potsdam. Seit 2014 lebt und arbeitet sie in Hamburg als Embodiment Coach, Trainer und Moderatorin. Sie lehrt im Bereich Wirtschaftspsychologie an der Fachhochschule Hamburg und BiTS. Sie ist Mitbegründerin des Embodiment Institute Hamburg in Zusammenarbeit mit ihrer Partnerin Nadja Roder-Winkel. Ihr Verkörperungsansatz bezieht seine Inspiration aus dem Social Presencing Theatre (Arawana Hayashi), Improvisation & Performance Dance, Hypnotherapie und Authentic Movement.";
let Reitenbach_EN = "is a Bulgarian, living in Germany since 2002. She studied Psychology at the University of Tübingen and received her doctorate in Psychology at the University of Potsdam. Since 2014 she has been living and working in Hamburg as an embodiment coach, trainer and facilitator. She has been teaching within the field of Business Psychology at the University of Applied Sciences Hamburg and BiTS. Her current academic project has been introducing the U process to business psychology students. She ist the cofounder of the Embodiment Institute Hamburg in cooperation with her partner Nadja Roder-Winkel. Their embodiment approach draws its inspiration from Social Presencing Theatre (Arawana Hayashi), Improvisation & Performance Dance, Hypnotherapy and Authentic Movement.";

let Avo_DE = "ist Gründer von LUDEO, Magister Ludi, Game Design Thinker, erfahrener Spieldesigner, spielerischer Moderator und Ludic Coach. Er lehrt Allgemeine Betriebswirtschaftslehre, mit Schwerpunkt Controlling, an der Hochschule für Wirtschaft und Recht, Berlin.";
let Avo_EN = "is founder of LUDEO, Magister Ludi, Game Design Thinker, experienced game designer, play moderator and Ludic Coach. He teaches general business administration with a focus on controlling at the Berlin School of Economics and Law.";

let Burckhardt1_DE = "Kulturtheoretiker, Autor und Gründer von LudicPhilosophy. Burckhardt verfasste einige Bücher zur Kulturgeschichte und Theorie der Maschine, zuletzt Philosophie der Maschine“ und „Eine kurze Geschichte der Digitalisierung“. Seine Bücher wurden in mehrere Sprachen übersetzt. Daneben lehrte er an verschiedenen Universitäten und befasste sich eingehend mit der Welt der Programmierung.";
let Burckhardt1_EN = "Cultural theorist, author and founder of LudicPhilosophy. Burckhardt has written several books on the cultural history and theory of the machine, most recently »Philosophy of the Machine« and »A Short History of Digitization«. His books have been translated into several languages. In addition, he taught at various universities and dealt extensively with the world of programming.";

let SeminarStartup_DE = "Die digitale Transformation verändert alles. Neue digitale Spieler haben altverdiente Branchen und Unternehmen weggefegt. Neue digitale Technologien wie Machine Learning und Künstliche Intelligenz bedrohen jetzt ehemals sichere Arbeitsplätze in Büros und Managementetagen und werden in absehbarer Zeit unsere gesamte Lebenswirklichkeit dominieren. Alles, was vorstellbar ist, wird auch Realität werden, so lautet eines der ungeschriebenen Gesetze der digitalen Transformation. Auf die Radikalität unserer Zeit gibt es nur zwei Antworten: Den Kopf in den Sand zu stecken und mit der schweigenden Mehrheit hoffen, dass alles nicht so schlimm wird. Oder: Sich selber in das Abenteuer der neuen Möglichkeiten werfen und spielerisch zum Gestalter und Profiteur (nicht nur im materiellen Sinne) der Umwälzung zu werden. Bist Du bereit für die radikale Metamorphose im Denken, Lernen und Handeln, um auf der Gewinnerseite der neuen Ära zu stehen? Dieses Seminar versteht sich als Initiation in die schöne neue terra digitalis und gleichzeitig als Gelegenheit und Katalysator für tiefgreifenden persönlichen Wandel, dessen Auswirkungen in Beruf und Alltag zu spüren sein werden.";
let SeminarStartup_EN = "The Digital transformation is changing everything. New digital players have swept away old industries and companies. New digital technologies such as Machine Learning and Artificial Intelligence are now threatening formerly secure workplaces in offices and management floors and will dominate our entire reality in the foreseeable future. One of the unwritten laws of digital transformation is that everything that can be imagined will become reality. There are only two answers to the radicalism of our time: to bury your head in the sand and hope with the silent majority that everything will not get so bad. Or: To throw oneself into the adventure of new possibilities and playfully become the designer and profiteer (not only in the material sense) of revolution. Are you ready for the radical metamorphosis of thinking, learning and acting to be on the winning side of the new era? This seminar sees itself as an initiation into the beautiful new terra digitalis and at the same time as an opportunity and catalyst for profound personal change, the effects of which will be felt in work and everyday life.";


let SeminarPhilosophy_DE = "Von Anbeginn ist die Computerwelt ist voll von großen Verheißungen gewesen, und nicht selten haben die Dinge, die mit großen Aplomb angekündigt wurden, sich als ebenso große Enttäuschung entpuppt. Wenn man vom Segen und Fluch der Digitalisierung spricht, so liegt dem ein voraufgeklärtes Bewusstsein zugrunde: ein Mangel an Philosophie. Erstaunlicherweise betrifft diese Denkträgheit nicht nur die Nutzer, die sich keinem Informatikstudium unterzogen haben, sondern affiziert auch die sogenannten Experten: die Herren der Datenbanken, der Künstlichen Intelligenz oder des Machine Learning. Die Gefahr, die sich für ein Unternehmen ergibt, ist mit den Händen zu greifen: Man lässt sich von kurzfristigen Erwägungen, Trends und Buzzwords verleiten. Das Seminar unterzieht die Phantasmen, die sich in der Welt des Computers breit gemacht haben, einer gründlichen Überprüfung – und es versieht die Teilnehmer andererseits mit einem Fundus solider Einsichten.";
let SeminarPhilosophy_EN = "From the very beginning the computer world has been full of great promises, and not infrequently the things announced with great aplomb have turned out to be just as great disappointment. When one speaks of the blessing and curse of digitalization, one deals with a pre-enlightened consciousness: a lack of philosophy. Surprisingly, this inertia not only affects users who have not studied computer science, but also affects so-called experts: the masters of databases, artificial intelligence or machine learning. The danger that arises for a company is palpable: One is tempted by short-term considerations, trends and buzzwords. The seminar examines the phantasms that have spread throughout the computer world in depth - and on the other hand it provides participants with a pool of solid insights.";



let NewsStream1_DE = 'Der News-Stream ist eine Bot-Architektur, die das Internet eigenständig nach bestimmten, überaus speziellen Fragestellungen durchsucht und einen steten Strom von Nachrichten produziert. Die Technik ist bei verschiedenen Twitter-Bots zum Einsatz gekommen, die ihrerseits als Spender  genuin neuer Nachrichten von der Twitter-Gemeinde goutiert worden sind – und Tausende von Followern generiert haben. Der Mehrwert besteht jedoch nicht in dieser Gefolgschaft, sondern in der Qualität der Nachrichten. Will man sich über aktuelle Trends in bestimmten Teilbereichen informieren (etwa über die letzten Entwicklungen der Präzisionsmedizin), sind Blogs, Ingroup- und Expertenbeiträge weit informativer als das, was man in den Zeitungen zu lesen bekommt.';
let NewsStream2_DE = 'Neben diesem erhöhten Informationsgehalt versieht der News-Stream eine Webseite mit einer Öffnung in die Welt – und erhöhte auf diese Weise auch die Attraktivität Ihrer Internetpräsenz.';
let NewsStream3_DE = 'Wenn Sie Bedarf an einer solchen Technologie haben, sprechen Sie uns an.';

let NewsStream1_EN = 'The news stream is a bot architecture that independently searches the Internet for specific, highly specific questions and produces a constant stream of news. The technology has been used in a number of Twitter bots, which in turn have been appreciated as donors of genuinely new messages by the Twitter community - and have generated thousands of followers. The added value, however, is not in this following, but in the quality of the news. If you want to find out about current trends in certain areas (such as the latest developments in precision medicine), blogs, ingroup and expert articles are far more informative than what you read in the newspapers.';
let NewsStream2_EN = 'In addition to this increased information content, the news stream provides a website with an opening into the world - and in this way also increased the attractiveness of your Internet presence.';
let NewsStream3_EN = 'In case you are interested, please contact us.';


let bot_hr_DE = 'Ein Bot, der hauptsächlich Nachrichten zu Human Resource Management postet';
let bot_blockchain_DE = 'Ein Bot, der hauptsächlich Nachrichten zur Blockchain und zu Kryptowährungen postet';
let bot_medicine_DE = 'Ein Bot, der hauptsächlich Nachrichten zu Fragen der Präzisionsmedizin postet';


let bot_hr_EN = 'A bot that mainly posts messages about Human Resource Management';
let bot_blockchain_EN = 'A bot that mainly posts messages about blockchain and crypto currencies.';
let bot_medicine_EN = 'A bot that mainly posts news on precision medicine issues.';



i18n.configure({
    locales: {
        'en': {
            "About": "About the Company",
            "Contact": "Contact",
            "Seminars": "Seminars",

        	"hello": "Hello World!",
            "language": "Language",
            "German": "German",
            
            "SignUp": "SignUp",
            "SignExpalanation": signup_EN,
            "Training": "Digital Survival Training",
            "NextDate": "Next date",
            "Schedule": "Schedule",
            "Luxury": "Your motivation",
            "MotivationText": motivation_EN, 
            "MotivationPoint": "And that's why you are here!",
            
            "Objectives": "Objective",
            "NIT": "More about the NIT",
            "Burckhardt": "The Instructor",
            "BurckhardtVita": vita_EN,
            "Explanation": ProgrammingEN,
            "Eisenhower": EisenhowerEN,

            "Books": "Books",
            "Theory": "Theory",
            "Journalism": "Journalism",
            "Art": "Art",
            "Projects": "Projects",
            "Biography": "Biography",
            "Lectures": "Lectures",
            "AudioPieces": "Audio Pieces",
            "Together": "together with:",
            "Articles": "Articles",

            "computer_culture": computer_culture_EN,
            "computerworld": "On Computer Pioneers",
            "composer": "composer",
            "speaker": "speaker",
            "directed_by": "directed by",
            "duration": "duration",
            "twinkomplex_game": TwinKomplexEN,
            "email": "In case you have a question regarding our services, write an ",
            "reaction": " If I  am not totally aborbed by some writing, I will try to give you a feedback.",
            "AllNothingSite": "The \"All and Nothing\" Website",            
            "AllNothingExplain": "Here you can listen to the audio book of All and Nothing (sorry, only German)",

            "pages": "pages",

            "Metamorphosen": Metamorphosen_DE,
            "News": "News",

            "sample_chapter": "sample chapter",

            "Performances": "Performances / Installations",
            "Editions": "Editions and Translations",
            "TwinKomplexFilms": "TwinKomplex videos",
            
            "Downloads": "downloadable files",
            "Search": "Search",
            "with": "with",

            "AudioArt": AudioArt_DE,

            "SourceCode": SourceCode_DE,

            "PublishingService": Publishing_EN,
            "PublishingHeader": "Publishing Services",

            "Company": Company_EN,
            "Gamification": Gamification_EN,
            "Education": Education_EN,
            "Portal": Portal_EN,
            "RundumService": Three_60_EN,

            "CompanyEducation": "Advanced Training",
            "CompanyBook": "Books / Publishing Services",
        


            "TransformationObjective": TransformationObjective_EN,
            "TransformationPath": TransformationPath_EN,
            "TransformationInteraction": TransformationInteraction_EN,
            "TransformationTechnology": TransformationTechnology_EN,
            "Transformation360": Transformation360_EN,
            "PortalTopics": PortalTopics_EN,

            "TransformationObjectiveTitle": "Objective",
            "TransformationPathTitle": "The customized Learning Path",
            "TransformationInteractionTitle": "Interactive / Transmedial",
            "TransformationTopicsTitle": "Hot Topics",
            "TransformationTechnologyTitle": "Technology",


            "ServicesEditing": ServicesEditing_EN,
            "ServicesTranslation": ServicesTranslation_EN,
            "ServicesCampaign": ServicesCampaign_EN,
            "ServicesConsulting": ServicesConsulting_EN,

            "ServicesGeneral": "General Information",
            "ServicesTranslationTitle": "Translations",
            "ServicesEditingTitle": "Editing / Proofreading",
            "ServicesConsultingTitle": "Digital Consulting",


            "SeminarFormat": SeminarFormat_EN,
            "SeminarLocationInfo": SeminarLocation_EN,
            "SeminarPortal": SeminarPortal_EN,
            "SeminarOrigins": "The Origins",
            "SeminarHow": "How and Where",
            "SeminarPortalTitle": "The Learning Portal",
            "SeminarIdea": SeminarIdea_EN,

            "MovingTitlePortal": "The Portal",
            "MovingTitleNews": "News",
            "MovingTitleCompany": "About the Company",
            "MovingTitleSeminars": "The Seminars",
            "MovingTitlePhilosophy": "Digital Philosophy",
            "MovingTitleThinking": "Digital Thinking",

            "NavPortalTitle": "Learning Portal",
            "NavSeminarThinking": "Digital Thinking",
            "NavSeminarPhilosophy": "Digitale Philosophy",

            "Reitenbach_Bio": Reitenbach_EN,
            "Avo_Bio": Avo_EN,

            "Burckhardt1": Burckhardt1_EN,

            "Seminarleiter": "The Seminar Leaders",
            "SeminarLocation": "The Location",
            "SeminarProgram": "The Seminar Program",

            "SeminarStartup": SeminarStartup_EN,


            "SeminarPhilosophy": SeminarPhilosophy_EN,
            "Seminars": "Seminars",
            "programPDF": "Open program as *.pdf-document",

            "NewsStream1": NewsStream1_EN,
            "NewsStream2": NewsStream2_EN,
            "NewsStream3": NewsStream3_EN,

            "bot_hr": bot_hr_EN,
            "bot_blockchain": bot_blockchain_EN,
            "bot_medicine": bot_medicine_EN

        },
        'de': {
            "About": "Über die Firma",
            "Contact": "Kontakt", 
            "Seminars": "Seminars",

        	"hello": "Hallo Welt",
            "language": "Sprache",      
            "German": "Deutsch",
           
            "SignUp": "Anmelden",
            "SignExpalanation": signup_DE,

            "Training": "Zum Digital Survival Training",
            "NextDate": "Nächster Termin",
            "Schedule": "Seminar-Ablauf",
             "Luxury": "Ihre Motivation",
             "MotivationText": motivation_DE, 
            "MotivationPoint": "Und deswegen sind Sie hier!",

            "Objectives": "Das Ziel",
             "NIT": "Mehr zum NIT",
             "Burckhardt": "Zum Seminarleiter",
            "BurckhardtVita": vita_DE,
            "Explanation": t,
            "Eisenhower": EisenhowerDE,

            "Books": "Bücher",
            "Theory": "Theorie",
            "Journalism": "Publizistik",
            "Art": "Kunst",
            "Projects": "Projekte",
            "Biography": "Vita",
            "Lectures": "Vorträge",

            "AudioPieces": "Hörstücke",
            "Together": "zusammen mit:",
            "Articles": "Artikel",

            "computer_culture": computer_culture_DE,
            "computerworld": "Computerwelt-Schöpfer",
            "composer": "Komponist",
            "speaker": "Sprecher",
            "directed_by": "Regie",
            "duration": "Dauer",
            "twinkomplex_game": TwinKomplexDE,
            "email": "Wenn Sie eine Frage zu unserem Angebot haben, schreiben Sie ein ",
            "reaction": "Wenn ich mich nicht gänzlich in einer Arbeit verloren habe, bemühe ich mich, Ihnen eine Antwort zu geben.",
            "AllNothingSite": "Die Website zu \"Alles und Nichts\"",            
            "AllNothingExplain": "Hier kann man sich das Audiobuch zu Alles und Nichts anhören",
            "pages": "Seiten",

            "Metamorphosen": Metamorphosen_DE,
            "News": "Neuigkeiten",

            "sample_chapter": "Beispielkapitel",
            
            "Performances": "Performances / Installationen",
            "Editions": "Übersetzungs- und Herausgebertätigkeit",
            "TwinKomplexFilms": "TwinKomplex-Filme",

            "Downloads": "Dateien zum Download",
            "Search": "Suche",
            "with": "mit",   

            "SeminarInfo": SeminarInfo_DE,

            "PublishingService": Publishing_DE,
            "PublishingHeader": "Verlags-Services",

            "Company": Company_DE,
            "Gamification": Gamification_DE,
            "Education": Education_DE,
            "Portal": Portal_DE,
            "RundumService": Three_60_DE,

            "CompanyEducation": "Weiterbildung",
            "CompanyBook": "Bücher / Verlagsservices",

            "TransformationObjective": TransformationObjective_DE,
            "TransformationPath": TransformationPath_DE,
            "TransformationInteraction": TransformationInteraction_DE,
            "TransformationTechnology": TransformationTechnology_DE,
            "PortalTopics": PortalTopics_DE,
            "Transformation360": Transformation360_DE,

            "TransformationObjectiveTitle": "Zweck",
            "TransformationPathTitle": "Der eigene Lernpfad",
            "TransformationInteractionTitle": "Interaktiv / transmedial",
            "TransformationTopicsTitle": "Heiße Topics",
            "TransformationTechnologyTitle": "Technologie",


            "ServicesEditing": ServicesEditing_DE,
            "ServicesTranslation": ServicesTranslation_DE,
            "ServicesCampaign": ServicesCampaign_DE,
            "ServicesConsulting": ServicesConsulting_DE,

            "ServicesGeneral": "Allgemeines",
            "ServicesTranslationTitle": "Übersetzungen",
            "ServicesEditingTitle": "Lektorat",
            "ServicesConsultingTitle": "Digital-Beratung",

            "SeminarFormat": SeminarFormat_DE,
            "SeminarLocationInfo": SeminarLocation_DE,
            "SeminarPortal": SeminarPortal_DE,

            "SeminarOrigins": "Vorgeschichte",
            "SeminarHow": "Wie und wo",
            "SeminarPortalTitle": "Das Lernportal",
            "SeminarIdea": SeminarIdea_DE,

            "MovingTitlePortal": "Das Portal",
            "MovingTitleNews": "Neuigkeiten",
            "MovingTitleCompany": "Über die Firma",
            "MovingTitleSeminars": "Die Seminare",
            "MovingTitlePhilosophy": "Digitale Philosophie",
            "MovingTitleThinking": "Zum Denken der Programmierung",

            "NavPortalTitle": "Lern-Portal",
            "NavSeminarThinking": "Digital denken",
            "NavSeminarPhilosophy": "Digitale Philosophie",

            "Reitenbach_Bio": Reitenbach_DE,
            "Avo_Bio": Avo_DE,
            "Burckhardt1": Burckhardt1_DE,

            "Seminarleiter": "Die Seminarleiter",
            "SeminarLocation": "Die Location",
            "SeminarProgram": "Das Programm",
            "SeminarStartup": SeminarStartup_DE,

            "SeminarPhilosophy": SeminarPhilosophy_DE,
            "Seminars": "Seminare",
            "programPDF": "Öffne das Programm das *.pdf-Dokument",

            "NewsStream1": NewsStream1_DE,
            "NewsStream2": NewsStream2_DE,
            "NewsStream3": NewsStream3_DE,

            "bot_hr": bot_hr_DE,
            "bot_blockchain": bot_blockchain_DE,
            "bot_medicine": bot_medicine_DE

        }
    },
    cookie: 'lang'
});


i18n.setLocale('de');

window.i18n = i18n;


export default i18n;