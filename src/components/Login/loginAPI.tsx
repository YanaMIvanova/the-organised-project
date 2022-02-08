// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
    return new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: amount }), 500))
}

export async function loginUser(credentials: any) {
    return fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json())
}
