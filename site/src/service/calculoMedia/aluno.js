export function Alunos(num) {
    try {

        let x = [];
        for (let i = 1; i <= num; i++) {
            x = [...x, i];
        }
        return x;
    } catch (err) {
        return err.message;
    }
}
