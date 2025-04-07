        const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlM8JaVWKQndSOis2MxBLPqpPxzV6F3x1E39SgnpdATm0FAVijTvMA20A_8hVk0TE1aRuXBOy2PZGp/pub?gid=0&single=true&output=csv";

        async function verifyCertificate() {
            const certNumber = document.getElementById("certNumber").value.trim();
            const resultDiv = document.getElementById("result");

            if (!certNumber) {
                resultDiv.innerHTML = "<p style='color: white;'>⚠️ Please enter a certificate number.</p>";
                return;
            }

            try {
                const response = await fetch(sheetURL); //verification
                const data = await response.text();
                const certificateNumbers = data.split("\n").map(row => row.trim());

                if (certificateNumbers.includes(certNumber)) {
                    resultDiv.innerHTML = "<p style='color: white;'>✅ Valid Certificate <br> <span>Certified Learner</span></p>";
                } else {
                    resultDiv.innerHTML = "<p style='color: white;'>Incorrect detaild</p>"
                }
            } catch (error) {
                resultDiv.innerHTML = "<p style='color: white;'>Error in loading</p>"
            }
        }
