import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const userLang = navigator.language
const langs = {'en': localeEnMessages, 'es': localeEsMessages}
var msgs = langs[userLang]

ReactDOM.render(
            
        <IntlProvider locale={userLang} messages={msgs}>
            <JobsList />
        </IntlProvider>
        , document.getElementById("root")
);

