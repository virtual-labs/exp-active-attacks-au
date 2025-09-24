### Theory

## Introduction

Active attacks in network security refer to any unauthorized actions aimed at altering system resources or affecting their operations. This section provides a detailed overview of various active attack types, including their methodologies and common tools. We will explore Denial of Service, Man-in-the-Middle, Session Hijacking, SQL Injection, Cross-Site Scripting, Malware Injection, and Spoofing attacks. Finally, we will discuss key preventive measures and conclude with a look at the evolving threat landscape.

## Types of Active Attacks

### 1. Denial of Service (DoS) Attacks

Denial of Service attacks aim to make a network resource unavailable to its intended users by overwhelming it with a flood of illegitimate requests.

**Example:** An attacker floods a web server with excessive requests, causing legitimate requests to be delayed or dropped, thus denying service to legitimate users.

#### Denial of Service Attack Flow

A Denial of Service (DoS) attack aims to overwhelm a server, making it unavailable to legitimate users. Steps in a DoS Attack:

```
Attacker Scans for Target
     |
     v
(1) Attacker uses Nmap to find open ports/services on target server
     |
     v
(2) Attacker identifies vulnerable service (e.g., HTTP on port 80)
     |
     v
(3) Attacker launches flood of requests (e.g., SYN flood)
     |
     v
(4) Server becomes overwhelmed, unable to process legitimate requests
     |
     v
(5) Legitimate users are unable to access the service (DoS)
```

### 2. Man-in-the-Middle (MITM) Attacks

MITM attacks involve an attacker intercepting and altering the communication between two parties who believe they are directly communicating with each other.

**Example:** An attacker intercepts the communication between a user and a banking site, altering transaction details to redirect funds to the attacker's account.

#### Session Hijacking Attack Flow

A session hijacking attack occurs when an attacker intercepts a session token (often used for authentication) to impersonate a legitimate user.

```
Victim Logs In
     |
     v
(1) Victim's device communicates with server (unencrypted Wi-Fi)
     |
     v
(2) Attacker intercepts traffic (MITM) - ARP Spoofing
     |
     v
(3) Attacker captures session token using packet sniffer (Wireshark)
     |
     v
(4) Attacker uses captured session token to impersonate victim
     |
     v
(5) Attacker accesses account and performs unauthorized actions
```

### 4. SQL Injection

SQL Injection attacks involve inserting malicious SQL queries into input fields to manipulate a web application's database. This can lead to unauthorized data access, modification, or deletion.

**Example:** An attacker inserts `' OR '1'='1'--` into a login form, bypassing authentication and gaining unauthorized access.

#### SQL Injection Attack Flow
```
Attacker Scans for Vulnerable Input Fields
     |
     v
(1) Attacker identifies a field, such as a login form or search bar
     |
     v
(2) Attacker crafts a malicious SQL query and injects it into the input
     |
     v
(3) The server executes the malicious query against the database
     |
     v
(4) Attacker can exfiltrate data, bypass security, or corrupt the database
```

### 5. Cross-Site Scripting (XSS)

XSS attacks involve injecting malicious scripts into web pages viewed by other users. These scripts can execute in the victim's browser, allowing the attacker to steal session cookies, deface websites, or redirect users to malicious sites.

**Example:** An attacker injects a script into a forum post that steals the session cookies of any user who views it.

#### XSS Attack Flow
```
Attacker Finds a Vulnerable Website
     |
     v
(1) Attacker injects a malicious script into a user-input field (e.g., comments)
     |
     v
(2) The server stores the script without proper sanitization
     |
     v
(3) A victim visits the web page, and their browser executes the script
     |
     v
(4) The script performs malicious actions, like stealing the victim's session token
```

### 6. Malware Injection

Malware injection involves introducing malicious software (viruses, worms, Trojans, ransomware) into a system. The goal is to compromise the system's integrity, confidentiality, or availability.

**Example:** An attacker tricks a user into downloading a legitimate-looking application that contains a Trojan horse, which then creates a backdoor on the user's system.

#### Malware Injection Attack Flow
```
Attacker Creates Malicious Software
     |
     v
(1) Malware is embedded in a seemingly harmless file or link
     |
     v
(2) The user is tricked (e.g., via a phishing email) into downloading or executing it
     |
     v
(3) The malware installs itself on the user's system
     |
     v
(4) It can then perform various malicious actions, such as data exfiltration or system damage
```

### 7. Spoofing Attacks

Spoofing attacks involve an attacker masquerading as a known or trusted entity to deceive systems or users. This can include IP spoofing, email spoofing, and DNS spoofing.

**Example:** An attacker sends an email that appears to come from a trusted source, tricking the recipient into clicking a malicious link (phishing).

## Techniques and Tools Used in Active Attacks

### Brute Force Attacks

Brute force attacks involve systematically trying all possible combinations of passwords or encryption keys until the correct one is found.

### Social Engineering

Social engineering exploits human psychology to trick users into divulging confidential information or performing actions that compromise security. This is often a key component in initiating data exfiltration.

### Network Scanning Tools

Active attacks involve direct interaction with the target system, intending to disrupt, manipulate, or gain unauthorized access to resources. These attacks often utilize sophisticated network scanning tools such as Nmap and Wireshark to scan, exploit, or interfere with network operations. The subsequent subsections elucidate the tools and their application within the specific attack context.

#### Nmap (Network Mapper)

Nmap is primarily a network scanning and reconnaissance tool, but it plays a crucial role in the initial stages of active attacks, especially in:
Denial of Service (DoS) Attacks - Nmap can be used to identify open ports, services, and their versions running on a target machine. This information helps attackers select vulnerable services to overload or exploit.

#### Wireshark

Wireshark is a powerful packet sniffer and analyzer used for inspecting real-time network traffic. In active attack scenarios, it supports Man-in-the-Middle (MITM) Attacks—Once an attacker has successfully positioned themselves between two communicating parties (e.g., via ARP spoofing), Wireshark can capture and dissect traffic between them. It allows attackers to inspect credentials, session tokens, and unencrypted data or to analyze protocol weaknesses (like in HTTP or Telnet).

## Preventive Measures

### Intrusion Detection and Prevention Systems (IDPS)

IDPS can detect and respond to active attacks in real-time, blocking malicious activities and alerting administrators.
*   **Effective against**: DoS attacks, SQL Injection, XSS, and network scanning.

### Firewalls

Firewalls control incoming and outgoing network traffic based on predetermined security rules, providing a barrier against many types of active attacks.
*   **Effective against**: DoS attacks, unauthorized remote access, and blocking connections to known malicious servers.

### Secure Coding Practices

Writing secure code helps prevent vulnerabilities that could be exploited by active attacks, such as SQL injection and XSS.
*   **Effective against**: SQL Injection, XSS, and certain types of buffer overflows.

### Encryption

Encryption ensures that even if data is intercepted, it remains unreadable without the proper decryption key, protecting data in transit and at rest.
*   **Effective against**: Man-in-the-Middle attacks and Session Hijacking (by protecting session tokens).

### Multi-Factor Authentication (MFA)

MFA adds an extra layer of security, requiring multiple forms of verification before granting access.
*   **Effective against**: Session Hijacking, spoofing attacks, and unauthorized access from compromised credentials.

### Regular Security Audits

Conducting regular security audits and penetration testing helps identify and fix vulnerabilities before attackers can exploit them.
*   **Effective against**: A wide range of vulnerabilities that could be exploited by various active attacks.

## Conclusion

Active attacks pose a significant threat to network security, requiring robust defensive measures to protect against them. By understanding the various types of active attacks and implementing effective security strategies, organizations can mitigate risks and ensure the integrity, availability, and confidentiality of their network resources. As technology evolves, attackers adapt, utilizing emerging vectors like AI-driven attacks and IoT device exploitation, making continuous vigilance essential.
