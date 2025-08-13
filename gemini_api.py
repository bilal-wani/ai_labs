import google.generativeai as genai

# Set API key
genai.configure(api_key="AIzaSyAB1GZ_pCa6CTyPzgRXxw0M8BJbZqGcNPM")

# Load the free model
model = genai.GenerativeModel("gemini-1.5-flash")

# Make a request
response = model.generate_content("My revenue is 100 and cost is 30, calculate GOM")
print(response.text)
