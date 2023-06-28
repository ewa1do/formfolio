class Utilities {
    /**
     *
     * @param name the name to be formatted MUST HAVE PATTERN word-word-...
     * @param view optional param to check if the function will be rendered as a view
     * @returns a string with a name sanitized
     */
    public sanitizeInput(name: string, view = false) {
        let nameSatinized: string | string[] = name.split('-')
        nameSatinized = nameSatinized[nameSatinized.length - 1]

        if (view && nameSatinized.includes('_')) {
            nameSatinized = nameSatinized.split('_').join(' ')
        }
        return nameSatinized
    }

    /**
     *
     * @param delimiter: string to be use to split the matches
     * @returns An object from the localStorage with all the data corresponding to the delimeter
     */
    public getFields<T>(delimiter: string): T {
        const data = Object.entries(localStorage)
            .filter((arr) => arr[0].includes(delimiter))
            .map((arr) => [this.sanitizeInput(arr[0]), arr[1]])

        return Object.fromEntries(data)
    }
}

export default new Utilities()
