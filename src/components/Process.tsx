export type Process = {
    pid? : string
    chegada : number
    execucao : number
    deadline : number
}

export function generatePID (process : Process) {
    let temp = Math.floor(Math.random() * 51) + 100;
    process.pid = `PID${temp}`;
}