

The following steps outline the procedure for simulating a TCP SYN Flood attack:

1.  **Understand the Attack Mechanism**:
    *   A TCP SYN Flood attack exploits the TCP three-way handshake.
    *   The attacker sends many SYN requests to a server but never sends the final ACK packet.
    *   This leaves many "half-open" connections, which consumes the server's resources and prevents legitimate users from connecting.
    *   **Expected Outcome**: The server's connection table will be filled with half-open connections, making it unresponsive.

2.  **Initiate the Attack**:
    *   Select an available (free) port on the attacker machine.
    *   Send a **SYN** message from the attacker's port to a server port to begin the TCP handshake.

3.  **Overwhelm the Server**:
    *   Continuously send SYN messages to the server from different source ports.
    *   Do not respond to the server's **SYN-ACK** replies. This is crucial for leaving connections half-open.

4.  **Observe and Verify the Impact**:
    *   As the attack continues, the server's available connection slots will be exhausted.
    *   Attempt to make a legitimate connection to the server. You should observe that the server is unresponsive.
    *   Once the server is unresponsive, click on **"Verify"** to confirm that the Denial of Service attack was successful.

5.  **Monitor Port Status**:
    *   Hover over any port on the server to view its port number and current connection status (e.g., `SYN_RECV`).

6.  **Simulate Normal Behavior (Optional)**:
    *   To understand the contrast with a normal connection, you can complete a handshake.
    *   In the **'Respond'** section on the server, select the correct **color** and **port number** to send an **ACK** packet for a specific SYN request.
    *   This will complete the handshake for that single connection.
