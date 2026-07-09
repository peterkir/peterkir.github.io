---
layout: default
title: Dev Resources
nav_order: 3
---

# Development Resources

---

## OSGi Bundle Repositories (OBR)

Pre-built OSGi Bundle Repository index files for Eclipse releases, suitable for use with BndTools and Eclipse IDE setups.

[Browse OBR files]({{ '/static/obr/index.html' | relative_url }}){: .btn }

Available index files for Eclipse versions: 3.6.2, 3.7.2, 3.8.2, 4.3.2, 4.4.0, 4.4.1, 4.6.0, 4.6.1 (Platform and Simultaneous releases).

---

## OSGi Runtime Debugging

Tools and configuration for debugging OSGi runtimes using the Apache Felix Web Console and related plugins.

[OSGi Debugging Setup]({{ '/static/osgi-debug/index.html' | relative_url }}){: .btn }

Includes Apache Felix plugins:

- Web Console
- Declarative Services
- Event Admin
- Memory Usage
- OBR Browser
- Package Admin
- Script Console
- Subsystems

---

## Project Setups

- [GitHub projects — OSGi and bnd/bndtools](https://peterkir.github.io/idefix/bootstrap/osgi/index.html){: target="_blank" }
- [GitHub projects — peterkir](https://peterkir.github.io/idefix/bootstrap/peterkir/index.html){: target="_blank" }

{: .note }
The `idefix` project setup links above point to the [peterkir/idefix](https://github.com/peterkir/idefix){: target="_blank" } repository's GitHub Pages site.

---

## Active GitHub Repositories

Original repositories for developers, sorted by last update (newest first). For detailed project information and to contribute, visit the respective GitHub repository.

### Core Development Tools

#### [vscode-bnd-plugin](https://github.com/peterkir/vscode-bnd-plugin){: target="_blank" }

Visual Studio Code extension providing rich language support for bnd (.bnd) and bndrun (.bndrun) files. Includes LSP support, TextMate grammar, and OSGi tooling integration.

**Updated:** July 1, 2026 · **Language:** TypeScript  
**Technologies:** VS Code Extension, LSP, Node.js, bnd/bndtools toolchain

#### [lecture-template](https://github.com/peterkir/lecture-template){: target="_blank" }

Template for creating educational lecture materials and presentations.

**Updated:** June 18, 2026 · **Languages:** HTML, CSS, JavaScript  
**Technologies:** HTML5, CSS3, JavaScript

#### [vscode-jdk-config](https://github.com/peterkir/vscode-jdk-config){: target="_blank" }

VS Code extension to configure and manage JRE/JDK settings within the editor.

**Updated:** April 27, 2026 · **Language:** TypeScript  
**Technologies:** VS Code Extension API, TypeScript, JDK/JRE Configuration  
**License:** Eclipse Public License 2.0

#### [bugfix.org.eclipse.paho.mqttv5.client](https://github.com/peterkir/bugfix.org.eclipse.paho.mqttv5.client){: target="_blank" }

OSGi wrapper for Eclipse Paho MQTT v5 client library for non-fully-OSGi-compatible bundles.

**Updated:** April 13, 2026 · **Language:** Java  
**Technologies:** MQTT v5, Eclipse Paho, OSGi, Bundle Wrapping

### Personal Projects & Infrastructure

#### [peterkir.github.io](https://github.com/peterkir/peterkir.github.io){: target="_blank" }

Repository for this GitHub Pages website with Jekyll-based static site generation.

**Updated:** April 7, 2026 · **Languages:** JavaScript, HTML, CSS, Markdown  
**Technologies:** Jekyll, GitHub Pages, Markdown, Just the Docs Theme  
**License:** Eclipse Public License 1.0 · **Stars:** 1

### Examples & Templates

#### [tycho-example](https://github.com/peterkir/tycho-example){: target="_blank" }

Example project demonstrating Tycho for Eclipse plugin development with Maven.

**Updated:** April 2, 2026 · **Languages:** Java, XML  
**Technologies:** Eclipse, Tycho, Maven, OSGi, Eclipse PDE

#### [example.javafx](https://github.com/peterkir/example.javafx){: target="_blank" }

Example JavaFX application demonstrating desktop GUI development with Java.

**Updated:** February 20, 2026 · **Language:** Java  
**Technologies:** Java, JavaFX GUI Framework  
**License:** Eclipse Public License 2.0

#### [bnd-workspace-template](https://github.com/peterkir/bnd-workspace-template){: target="_blank" }

Workspace template for bnd/bndtools projects with Gradle build system.

**Updated:** February 17, 2026 · **Languages:** Java, Gradle, XML  
**Technologies:** bnd/bndtools, Gradle, OSGi, Java  
**License:** Apache License 2.0

---

## klibio Organization Repositories

Original repositories from the Kirschners GmbH (klibio) organization, sorted by last update (newest first).

### Examples & Education

#### [example.pde.rcp](https://github.com/klibio/example.pde.rcp){: target="_blank" }

Showcase Eclipse RCP application developed with PDE and Maven Tycho.

**Updated:** July 3, 2026 · **Language:** Java  
**Technologies:** Eclipse PDE, Maven Tycho, RCP, Java  
**License:** Eclipse Public License 2.0 · **Stars:** 2

#### [example.bnd.rcp](https://github.com/klibio/example.bnd.rcp){: target="_blank" }

Eclipse RCP application examples with bndtools.

**Updated:** June 25, 2026 · **Language:** Java  
**Technologies:** bndtools, Eclipse RCP, Java, OSGi  
**Stars:** 7 · **Forks:** 6 · **Issues:** 2

### Development Infrastructure & Tools

#### [bootstrap](https://github.com/klibio/bootstrap){: target="_blank" }

Setup scripts for Java developer machine configuration and environment provisioning.

**Updated:** March 30, 2026 · **Language:** Shell  
**Technologies:** Shell scripting, Java development environment setup  
**License:** MIT License · **Stars:** 1

#### [apps](https://github.com/klibio/apps){: target="_blank" }

Java applications repository and collection.

**Updated:** March 26, 2026 · **Language:** Java  
**Technologies:** Java, OSGi  
**License:** Eclipse Public License 2.0

#### [mvn.deploy.bnd](https://github.com/klibio/mvn.deploy.bnd){: target="_blank" }

Maven deployment scripts for bnd/bndtools projects.

**Updated:** March 2, 2026 · **Language:** Shell  
**Technologies:** Maven, bnd, Shell scripting

#### [mvn.deploy.java](https://github.com/klibio/mvn.deploy.java){: target="_blank" }

Evaluation of Sonatype Maven Central Deployment for Java projects.

**Updated:** January 4, 2026 · **Language:** Java  
**Technologies:** Maven, Java, Sonatype Maven Central

#### [cdn](https://github.com/klibio/cdn){: target="_blank" }

Content Delivery Network resources and configuration.

**Updated:** December 17, 2025 · **Language:** CSS  
**Technologies:** CSS, CDN

#### [bnd](https://github.com/klibio/bnd){: target="_blank" }

Bnd/Bndtools – Comprehensive tooling to build OSGi bundles with Eclipse, Maven, and Gradle plugins. Core build system for OSGi development.

**Updated:** August 18, 2025 · **Language:** Java  
**Technologies:** OSGi, bnd/bndtools, Maven, Gradle, Eclipse, Manifest processing  
**Stars:** 0 · **Forks:** 300

### System Management & Eclipse Tools

#### [EclipseInstallationManager](https://github.com/klibio/EclipseInstallationManager){: target="_blank" }

Tool to manage Eclipse Application installations with the official Eclipse Installer.

**Updated:** August 17, 2025 · **Language:** Java  
**Technologies:** Eclipse, Eclipse Installer, Java  
**License:** Eclipse Public License 2.0

#### [eclipse-oomph-console](https://github.com/klibio/eclipse-oomph-console){: target="_blank" }

Console Oomph Installer – Eclipse plugin for console-based IDE installation and provisioning.

**Updated:** April 12, 2024 · **Language:** Java  
**Technologies:** Eclipse, Oomph, Plugin development, Java  
**License:** Eclipse Public License 2.0 · **Forks:** 4

#### [eclipse-oomph-console-site](https://github.com/klibio/eclipse-oomph-console-site){: target="_blank" }

P2 plugin repository for Console Oomph Installer distribution.

**Updated:** April 3, 2024 · **Technologies:** P2 Repository, Eclipse Update Site, XML  
**Forks:** 1

#### [bndtools](https://github.com/klibio/bndtools){: target="_blank" }

Bnd/Bndtools Eclipse IDE integration – Tooling for building OSGi bundles with rich IDE support.

**Updated:** March 20, 2024 · **Language:** Java  
**Technologies:** Eclipse IDE, bndtools, OSGi, Plugin development  
**Stars:** 0 · **Forks:** 300

#### [ecd](https://github.com/klibio/ecd){: target="_blank" }

Eclipse Class Decompiler – Eclipse plugin integrating multiple class decompilers (JD, CFR, Procyon) into the Eclipse development workflow.

**Updated:** March 16, 2024 · **Language:** Java  
**Technologies:** Eclipse Plugin, Class Decompiler, JD, CFR, Procyon  
**License:** Eclipse Public License 1.0 · **Forks:** 61

### Docker & Containers

#### [docker-baseimage-gui](https://github.com/klibio/docker-baseimage-gui){: target="_blank" }

Minimal Docker baseimage for X graphical applications in containers with lightweight setup.

**Updated:** August 31, 2024 · **Language:** C++  
**Technologies:** Docker, X11, GUI applications, Alpine Linux  
**License:** MIT License · **Forks:** 204

#### [docker-eclipse](https://github.com/klibio/docker-eclipse){: target="_blank" }

Docker container for Eclipse IDE with complete development environment.

**Updated:** December 6, 2022 · **Language:** Shell  
**Technologies:** Docker, Shell, Eclipse IDE  
**License:** Eclipse Public License 2.0 · **Stars:** 2

#### [docker-osgi-starterkit](https://github.com/klibio/docker-osgi-starterkit){: target="_blank" }

Docker container providing Eclipse Equinox OSGi starter kits and examples.

**Updated:** September 8, 2021 · **Language:** Shell  
**Technologies:** Docker, Shell, Eclipse Equinox, OSGi  
**License:** Eclipse Public License 2.0

---

## Historical Projects

Original repositories from klibio organization (2016–2023), archived and maintained for reference.

### Docker & Infrastructure

#### [docker-ubuntu-vnc-desktop](https://github.com/klibio/docker-ubuntu-vnc-desktop){: target="_blank" }

Docker image providing web VNC interface to access Ubuntu LXDE/LxQT desktop environment.

**Updated:** April 4, 2021 · **Language:** HTML  
**Technologies:** Docker, VNC, Ubuntu, LXDE, LxQT  
**License:** Apache License 2.0 · **Forks:** 1.5k

#### [cypht-docker](https://github.com/klibio/cypht-docker){: target="_blank" }

Docker image for Cypht email client setup and deployment.

**Updated:** November 29, 2023 · **Language:** Shell  
**Technologies:** Docker, Cypht, Email Client, Shell scripting  
**License:** GNU General Public License v2.0 · **Forks:** 25

#### [docker-github-runner](https://github.com/klibio/docker-github-runner){: target="_blank" }

GitHub Actions runner Docker image with docker-compose configuration.

**Updated:** January 6, 2023 · **Language:** Shell  
**Technologies:** Docker, GitHub Actions, CI/CD, docker-compose

#### [io.klib.tinyproxy](https://github.com/klibio/io.klib.tinyproxy){: target="_blank" }

TinyProxy Docker container using Alpine Linux for lightweight proxy deployment.

**Updated:** January 27, 2020 · **Language:** Dockerfile  
**Technologies:** Docker, TinyProxy, Alpine Linux, HTTP Proxy  
**License:** MIT License · **Forks:** 14

#### [io.klib.docker.java](https://github.com/klibio/io.klib.docker.java){: target="_blank" }

Docker Java runtime container for containerized Java applications.

**Updated:** December 6, 2018 · **Language:** Java  
**Technologies:** Docker, Java Runtime, Containerization

#### [io.klib.docker.builder](https://github.com/klibio/io.klib.docker.builder){: target="_blank" }

Docker-based build system using mounted directories for project compilation.

**Updated:** December 3, 2019 · **Language:** Java  
**Technologies:** Docker, Java Build, Maven, Container build patterns

#### [io.klib.forwarding-ssl-proxy](https://github.com/klibio/io.klib.forwarding-ssl-proxy){: target="_blank" }

SSL proxy for forwarding connections with certificate handling.

**Updated:** November 19, 2019 · **Language:** Dockerfile  
**Technologies:** Docker, SSL/TLS, Proxy, Networking

#### [io.klib.docker.osgi.tut](https://github.com/klibio/io.klib.docker.osgi.tut){: target="_blank" }

Docker-based OSGi tutorial and examples for containerized OSGi development.

**Updated:** January 21, 2022 · **Language:** Java  
**Technologies:** Docker, OSGi, Eclipse Equinox, Tutorial  
**Stars:** 1

### Eclipse & OSGi Tools

#### [eclipse-oomph-console-site](https://github.com/klibio/eclipse-oomph-console-site){: target="_blank" }

P2 plugin repository for Console Oomph Installer distribution.

**Updated:** April 3, 2024 · **Technologies:** P2 Repository, Eclipse Update Site

#### [LogViewer](https://github.com/klibio/LogViewer){: target="_blank" }

Eclipse plugin for tailing log files and console output with syntax coloring.

**Updated:** November 20, 2021 · **Language:** Java  
**Technologies:** Eclipse Plugin, Log Viewer, Syntax Highlighting  
**License:** Eclipse Public License 2.0 · **Forks:** 8

#### [oomph-task-unzip](https://github.com/klibio/oomph-task-unzip){: target="_blank" }

Oomph Task plugin for unzipping archives during Eclipse IDE provisioning.

**Updated:** March 26, 2020 · **Language:** Java  
**Technologies:** Eclipse Oomph, Task plugin, Archive handling  
**License:** Eclipse Public License 1.0 · **Forks:** 3

#### [xmind](https://github.com/klibio/xmind){: target="_blank" }

Popular mind mapping software for creating and organizing mind maps.

**Updated:** July 28, 2020 · **Language:** Java  
**Technologies:** Mind Mapping, JavaFX, Visualization, Brainstorming  
**Forks:** 502

#### [AsciidocFX](https://github.com/klibio/AsciidocFX){: target="_blank" }

Asciidoc editor and publishing toolchain written with JavaFX for creating books, documents, and slides.

**Updated:** April 7, 2020 · **Language:** Java  
**Technologies:** Asciidoc, JavaFX, PDF/EPUB/Mobi generation, Documentation  
**License:** Apache License 2.0 · **Forks:** 302

### Java Libraries & Tools

#### [zip4j](https://github.com/klibio/zip4j){: target="_blank" }

Java library for handling zip files and streams with advanced compression support.

**Updated:** August 9, 2022 · **Language:** Java  
**Technologies:** ZIP compression, Java library, File handling  
**License:** Apache License 2.0 · **Forks:** 325

#### [io.klib.tools](https://github.com/klibio/io.klib.tools){: target="_blank" }

Java development tools and utilities library.

**Updated:** July 2, 2022 · **Language:** Java  
**Technologies:** Java utilities, Development tools  
**Stars:** 1 · **Forks:** 1

#### [io.klib.osgi.etcd](https://github.com/klibio/io.klib.osgi.etcd){: target="_blank" }

OSGi Bundle wrapper for etcd distributed configuration management.

**Updated:** February 19, 2018 · **Languages:** Multiple  
**Technologies:** OSGi, etcd, Configuration Management, Bundle wrapping  
**License:** Apache License 2.0

#### [io.klib.util](https://github.com/klibio/io.klib.util){: target="_blank" }

Utility classes and helper functions for Java development.

**Updated:** July 20, 2017 · **Language:** HTML  
**Technologies:** Java utilities, Helper library

#### [io.klib.aries.example](https://github.com/klibio/io.klib.aries.example){: target="_blank" }

Apache Aries example for OSGi dependency injection and services.

**Updated:** January 24, 2023 · **Language:** Java  
**Technologies:** Apache Aries, OSGi, Dependency Injection, Service Model

#### [io.klib.process.log.tooling](https://github.com/klibio/io.klib.process.log.tooling){: target="_blank" }

Log tailer and listener implementation with subprocess process handling.

**Updated:** February 9, 2021 · **Language:** Java  
**Technologies:** Log processing, Process management, Java utilities

#### [jpmcli](https://github.com/klibio/jpmcli){: target="_blank" }

JPM command-line interface tool for Java package management.

**Updated:** October 26, 2020 · **Language:** Java  
**Technologies:** Java package management, CLI, bnd integration  
**License:** Apache License 2.0 · **Forks:** 10

#### [org.klib.io.bnd.example](https://github.com/klibio/org.klib.io.bnd.example){: target="_blank" }

Bnd example project demonstrating OSGi bundle development practices.

**Updated:** November 5, 2018 · **Language:** Java  
**Technologies:** bnd, OSGi bundles, Maven, Example project

#### [ee.j2se-version-11](https://github.com/klibio/ee.j2se-version-11){: target="_blank" }

Wrapper for AdoptOpenJDK 11 as OSGi build bundle.

**Updated:** February 25, 2020 · **Language:** Java  
**Technologies:** OSGi, JDK wrapping, AdoptOpenJDK, Build bundle  
**License:** Apache License 2.0

### Cloud & Infrastructure

#### [vaultwarden](https://github.com/klibio/vaultwarden){: target="_blank" }

Unofficial Bitwarden-compatible server written in Rust, formerly known as bitwarden_rs.

**Updated:** February 27, 2022 · **Language:** Rust  
**Technologies:** Bitwarden, Password Manager, Rust, Server  
**License:** GNU General Public License v3.0 · **Forks:** 3k

#### [io.klib.terraform](https://github.com/klibio/io.klib.terraform){: target="_blank" }

Terraform infrastructure configuration examples for cloud deployment.

**Updated:** March 8, 2020 · **Language:** HCL  
**Technologies:** Terraform, Infrastructure as Code, Cloud provisioning

#### [io.klib.istio](https://github.com/klibio/io.klib.istio){: target="_blank" }

Istio service mesh configuration examples and templates.

**Updated:** February 29, 2020 · **Languages:** Multiple  
**Technologies:** Istio, Service Mesh, Kubernetes, Networking

#### [io.klib.netconnect](https://github.com/klibio/io.klib.netconnect){: target="_blank" }

Network connectivity utilities and diagnostic tools.

**Updated:** January 27, 2020 · **Language:** Shell  
**Technologies:** Networking, Network diagnostics, Shell utilities

#### [io.klib.helm](https://github.com/klibio/io.klib.helm){: target="_blank" }

Helm chart examples and utilities for Kubernetes deployments.

**Updated:** January 26, 2020 · **Language:** Smarty  
**Technologies:** Helm, Kubernetes, Chart templates

#### [klib.cluster](https://github.com/klibio/klib.cluster){: target="_blank" }

Clustering utilities for distributed applications and cluster management.

**Updated:** October 21, 2019 · **Languages:** Multiple  
**Technologies:** Clustering, Distributed systems, High availability

### Examples & Evaluation Projects

#### [bndtools-klibio-templates](https://github.com/klibio/bndtools-klibio-templates){: target="_blank" }

Bndtools project templates for klibio OSGi development workflows.

**Updated:** March 31, 2023 · **Language:** Java  
**Technologies:** bndtools, OSGi, Templates, Maven  
**License:** Other

#### [bndtools-eclipse-workspace](https://github.com/klibio/bndtools-eclipse-workspace){: target="_blank" }

Eclipse workspace configuration for bndtools development environment.

**Updated:** March 30, 2023 · **Languages:** Mixed  
**Technologies:** bndtools, Eclipse, Workspace configuration  
**License:** Other

#### [io.klib.flux](https://github.com/klibio/io.klib.flux){: target="_blank" }

OSGi bundle implementation of reactive flux pattern.

**Updated:** March 14, 2023 · **Language:** Java  
**Technologies:** OSGi, Reactive programming, Flux pattern

#### [github-actions-eval](https://github.com/klibio/github-actions-eval){: target="_blank" }

Evaluation and testing of GitHub Actions CI/CD capabilities.

**Updated:** January 11, 2023 · **Languages:** Multiple  
**Technologies:** GitHub Actions, CI/CD, Workflow automation

#### [tycho-demo](https://github.com/klibio/tycho-demo){: target="_blank" }

Maven Tycho demonstration project for Eclipse plugin development.

**Updated:** November 23, 2018 · **Language:** HTML  
**Technologies:** Maven Tycho, Eclipse PDE, RCP, Build automation  
**Forks:** 30

#### [osgi.enroute.bundles](https://github.com/klibio/osgi.enroute.bundles){: target="_blank" }

OSGi enRoute bundles with simple implementations for OSGi learning and examples.

**Updated:** May 9, 2016 · **Language:** JavaScript  
**Technologies:** OSGi, enRoute, Bundles, Educational examples  
**Forks:** 23

#### [pipelines-java](https://github.com/klibio/pipelines-java){: target="_blank" }

Sample Java application referenced by Azure Pipelines documentation.

**Updated:** July 4, 2019 · **Language:** Java  
**Technologies:** Java, Azure Pipelines, CI/CD, Sample application  
**License:** Creative Commons Attribution 4.0 International · **Forks:** 11k

#### [oidc-workshop-spring-io-2019](https://github.com/klibio/oidc-workshop-spring-io-2019){: target="_blank" }

Workshop materials for "Securing Microservices with OpenID Connect and Spring Security 5.1" presented at Spring I/O 2019.

**Updated:** May 18, 2019 · **Language:** JavaScript  
**Technologies:** OpenID Connect, Spring Security, Microservices, OAuth  
**License:** Apache License 2.0 · **Forks:** 15

#### [eval-jenkinsx-springboot](https://github.com/klibio/eval-jenkinsx-springboot){: target="_blank" }

Evaluation project for Jenkins X with Spring Boot microservices.

**Updated:** April 26, 2019 · **Language:** Makefile  
**Technologies:** Jenkins X, Spring Boot, Kubernetes, CI/CD

#### [klib.trackr](https://github.com/klibio/klib.trackr){: target="_blank" }

Project tracking application for managing tasks and project metrics.

**Updated:** May 28, 2019 · **Language:** Java  
**Technologies:** Project tracking, Java, Issue management

#### [azure-voting-app-redis](https://github.com/klibio/azure-voting-app-redis){: target="_blank" }

Azure voting application example using Redis for Azure documentation.

**Updated:** April 24, 2019 · **Language:** Shell  
**Technologies:** Azure, Redis, Docker, Sample application  
**License:** MIT License · **Forks:** 3.5k

#### [drawio](https://github.com/klibio/drawio){: target="_blank" }

Source repository for draw.io diagram and flowchart application.

**Updated:** April 24, 2019 · **Language:** JavaScript  
**Technologies:** Diagramming, flowcharts, SVG, Visualization  
**License:** Apache License 2.0 · **Forks:** 7.3k

### Website & Organization

#### [klibio.github.io](https://github.com/klibio/klibio.github.io){: target="_blank" }

klibio organization website and GitHub Pages repository.

**Updated:** September 23, 2021 · **Languages:** Multiple  
**Technologies:** GitHub Pages, Jekyll, Website  
**Forks:** 1

---

## Technology Stack Overview

### Repository Summary

| Organization | Active (2024+) | Historical | Total |
|--------------|---|---|---|
| **peterkir** | 8 | — | 8 |
| **klibio** | 16 | 43 | 59 |
| **Total** | **24** | **43** | **67** |

### Primary Languages (All Repositories)

| Language | Count | Percentage |
|----------|-------|-----------|
| Java | 25 | 37% |
| Shell | 10 | 15% |
| TypeScript | 2 | 3% |
| JavaScript | 4 | 6% |
| HTML/CSS | 3 | 4% |
| Rust | 1 | 1% |
| HCL/Terraform | 1 | 1% |
| Docker/Dockerfile | 5 | 7% |
| Multiple | 11 | 16% |
| Other | 5 | 7% |

### Most Used Technologies & Frameworks

| Technology | Usage | Count |
|-----------|-------|-------|
| **OSGi Framework** | Middleware, Modularity | 12 |
| **Eclipse IDE/RCP/PDE** | IDE Platform, Tooling | 15 |
| **bnd/bndtools** | OSGi Build System | 8 |
| **Maven/Tycho** | Build Automation | 10 |
| **Docker** | Containerization | 12 |
| **Java** | Core Language | 25 |
| **Spring Framework** | Web & Microservices | 3 |
| **Kubernetes/Helm** | Orchestration | 4 |
| **VS Code Extensions** | Editor Support | 2 |
| **Git/GitHub** | Version Control, CI/CD | All |

### Licenses Distribution

| License | Count |
|---------|-------|
| Eclipse Public License 2.0 | 12 |
| Apache License 2.0 | 6 |
| MIT License | 4 |
| GNU General Public License | 2 |
| Eclipse Public License 1.0 | 2 |
| Creative Commons / Other | 3 |
| Unspecified/Mixed | 36 |

---

{: .note }
For complete project information, version details, and contribution guidelines, visit the individual repositories on GitHub. This documentation is updated regularly to reflect the latest active development.
