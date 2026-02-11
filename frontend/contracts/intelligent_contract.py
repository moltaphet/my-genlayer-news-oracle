from genlayer import *

class MySmartNetwork(Contract):
    def __init__(self):
        self.state_data = "Network Initialized"

    @write
    def update_state(self, input_data: str):
     
        self.state_data = f"Updated: {input_data}"

    @view
    def get_network_status(self) -> str:
        return self.state_data