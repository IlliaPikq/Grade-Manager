export const SubjectsLoader = async () => {
    const data = await fetch('http://localhost:3000/api/getsubjects')
    return data
}

export const GradesLoader = async () => {
        const data = await fetch('http://localhost:3000/api/getgrades')
        return data
}