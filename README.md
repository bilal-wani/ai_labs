# ai_labs
AI Projects

## Simple OpenAI App

This is a simple Python application to connect with the OpenAI API.

### Prerequisites

*   Python 3.6+
*   An OpenAI API key

### Setup

1.  **Clone the repository (or download the files).**

2.  **Create a virtual environment (optional but recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Set your OpenAI API key:**
    Replace `"your_api_key_here"` with your actual API key.

    On macOS / Linux:
    ```bash
    export OPENAI_API_KEY="your_api_key_here"
    ```

    On Windows (Command Prompt):
    ```bash
    set OPENAI_API_KEY="your_api_key_here"
    ```

    On Windows (PowerShell):
    ```powershell
    $env:OPENAI_API_KEY="your_api_key_here"
    ```

### Usage

Run the application:
```bash
python app.py
```

The script will then prompt you to enter a message for the AI.
