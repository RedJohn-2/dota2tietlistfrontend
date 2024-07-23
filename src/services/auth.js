import axios from "axios"

export const steamAuth = async () => {
    try {
        const currentUrl = window.location.href;

        var response = await axios.post("https://localhost:7295/User/SignInSteam", currentUrl, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href=response.data
    }
    catch(e)
    {
        console.error(e)
    }
}