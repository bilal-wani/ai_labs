import os
from openai import OpenAI

def main():
    """
    Main function to get user input and call the OpenAI API.
    """
    # The OpenAI library automatically looks for the OPENAI_API_KEY
    # environment variable. We can check for it to provide a better
    # error message if it's not set.
    if "OPENAI_API_KEY" not in os.environ:
        print("Error: The OPENAI_API_KEY environment variable is not set.")
        print("Please set it to your OpenAI API key.")
        return

    try:
        client = OpenAI()

        prompt = input("Enter your message for the AI: ")

        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )

        print("\nAI Response:")
        print(completion.choices[0].message.content)

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
