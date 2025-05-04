from typing import List, Dict, Any

INVITES_COMMAND = {
    "name": "invites",
    "description": "Show active invites from server.",
    "type": 1  # Slash command type
}

MY_INVITES_COMMAND = {
    "name": "my_invites",
    "description": "Show invites you've created.",
    "type": 1  # Slash command type
}

USER_INVITES_COMMAND = {
    "name": "user_invites",
    "description": "Show invites from a specific user",
    "type": 1,
    "options": [
        {
            "name": "user",
            "description": "The user whose invites you want to see",
            "type": 6,  # Type 6 = user
            "required": True
        }
    ]
}

# List of all commands to register
ALL_COMMANDS: List[Dict[str, Any]] = [
    INVITES_COMMAND,
    MY_INVITES_COMMAND, 
    USER_INVITES_COMMAND
]