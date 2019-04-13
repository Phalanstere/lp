export const selectLanguage = (language) => {
    console.log("You have selected language "  + language);
    return {
        type: 'LANGUAGE_SELECTED',
        payload: language
    }
};
