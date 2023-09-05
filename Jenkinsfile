node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    withSonarQubeEnv() {
      sh "/var/jenkins_home/sonar-scanner/sonar-scanner-4.2.0.1873-linux/bin/sonar-scanner"
    }
  }
  stage("Quality gate") {
    withSonarQubeEnv() {
                waitForQualityGate abortPipeline: true
            }
        }
}
