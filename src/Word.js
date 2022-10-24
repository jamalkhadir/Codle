import choices from './possibilities.txt'
export const defGrid = [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];

export const wordsetGenerator = async() => {
    let possible;
    let currentWord;
    await fetch(choices).then((response) => response.text()).then((result) => {
        const possibilitiesArr = result.split("\n")
        currentWord = possibilitiesArr[Math.floor(Math.random() * possibilitiesArr.length)]
        possible = new Set(possibilitiesArr)
    })
    return {possible, currentWord}
}