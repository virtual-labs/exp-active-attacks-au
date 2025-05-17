### Theory

## Introduction

Active attacks in network security refer to any unauthorized actions aimed at altering system resources or affecting their operations. Unlike passive attacks, which involve merely monitoring or eavesdropping on data, active attacks involve direct interaction with the network and its components. These attacks can disrupt communications, modify data, inject malicious content, or masquerade as legitimate users.

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

### 3. Session Hijacking

Session hijacking involves taking over a user's session after they have authenticated with a server. The attacker uses the user's session ID to gain unauthorized access.

**Example:** An attacker captures a session ID from an unencrypted cookie and uses it to log in as the legitimate user on a web application.

#### Session Hijacking Attack Flow

A session hijacking attack occurs when an attacker intercepts a session token (often used for authentication) to impersonate a legitimate user.

```
Victim Logs In
     |
     v
(1) Victim’s device communicates with server (unencrypted Wi-Fi)
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

SQL Injection attacks involve inserting malicious SQL queries into input fields to manipulate database operations.

**Example:** An attacker inserts `' OR '1'='1'--` into a login form, bypassing authentication and gaining access to the application.

### 5. Cross-Site Scripting (XSS)

XSS attacks involve injecting malicious scripts into web pages viewed by other users. These scripts can steal session cookies, deface websites, or redirect users to malicious sites.

**Example:** An attacker injects a script into a forum post that steals users' session cookies when they view the post.

### 6. Malware Injection

Malware injection involves injecting malicious software into a system to compromise it. This can include viruses, worms, Trojans, and ransomware.

**Example:** An attacker tricks a user into downloading a seemingly legitimate application that contains a Trojan horse, which then compromises the user's system.

### 7. Spoofing Attacks

Spoofing attacks involve masquerading as another entity in order to deceive systems or users. This can include IP spoofing, email spoofing, and DNS spoofing.

**Example:** An attacker sends an email that appears to come from a trusted source, tricking the recipient into clicking a malicious link.

## Techniques and Tools Used in Active Attacks

### Brute Force Attacks

Brute force attacks involve systematically trying all possible combinations of passwords or encryption keys until the correct one is found.

### Social Engineering

Social engineering exploits human psychology to trick users into divulging confidential information or performing actions that compromise security.

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

### Firewalls

Firewalls control incoming and outgoing network traffic based on predetermined security rules, providing a barrier against many types of active attacks.

### Secure Coding Practices

Writing secure code helps prevent vulnerabilities that could be exploited by active attacks, such as SQL injection and XSS.

### Encryption

Encryption ensures that even if data is intercepted or accessed by an attacker, it remains unreadable without the proper decryption key.

### Multi-Factor Authentication (MFA)

MFA adds an extra layer of security, requiring multiple forms of verification before granting access, making it harder for attackers to hijack sessions or spoof identities.

### Regular Security Audits

Conducting regular security audits helps identify and fix vulnerabilities before attackers can exploit them.

## Conclusion

Active attacks pose a significant threat to network security, requiring robust defensive measures to protect against them. By understanding the various types of active attacks and implementing effective security strategies, organizations can mitigate the risks and ensure the integrity, availability, and confidentiality of their network resources.
