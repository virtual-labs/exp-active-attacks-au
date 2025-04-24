### Procedure

1. **Understand the Attack Mechanism**  
   A TCP SYN Flood attack works by sending a large number of SYN requests to a server, without completing the TCP handshake. This keeps the server’s connection table full, eventually preventing legitimate users from accessing the server.

2. **Initiate the Attack**  
   Select an available (free) port on the attacker machine and send a **SYN** message to the server. This simulates the start of a TCP connection.

3. **Avoid Completing the Handshake**  
   Do not respond to the server’s **SYN-ACK** replies with an **ACK**. This incomplete handshake causes the server to leave the connection half-open.

4. **Overwhelm the Server**  
   Continue sending SYN messages without acknowledgments. As the server accumulates half-open connections, its available ports become occupied.

5. **Observe the Impact**  
   The goal is to overwhelm the server by occupying all available connection slots, making it temporarily inaccessible to other users.

6. **Verify the Outcome**  
   Once the server becomes unresponsive due to the flood, click on **"Verify"** to confirm that the attack was successful.

7. **View Port Details**  
   Hover over any port to see its port number and current connection status.

8. **Optional: Simulate Normal Behavior**  
   To simulate legitimate connections, access the **'Respond'** section on the server. Choose the correct **color** and **port number** to send an acknowledgment (**ACK**) and complete the handshake for selected requests.
