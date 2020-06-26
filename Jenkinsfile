pipeline {
    agent any
    environment {
        dockerImage = ''
        DOCKER_CREDENTIALS = 'docker-hub-vspaceone'
        DOCKER_IMAGE = 'vspaceone/web-react'
    }
    stages {
        stage('Build image') {
            steps {
                script {
                    dockerImage = docker.build("$DOCKER_IMAGE")
                }
            }
        }
        stage('Push latest image') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                script {
                    docker.withRegistry( '', DOCKER_CREDENTIALS ) {
                        dockerImage.push("latest")
                    }                    
                }
            }
        }
        stage('Push beta image') {
            when {
                expression { env.BRANCH_NAME == 'beta' }
            }
            steps {
                script {
                    docker.withRegistry( '', DOCKER_CREDENTIALS ) {
                        dockerImage.push("beta")
                    }
                }
            }
        }
        /*stage('Push hash image') {
            steps {
                script {
                    docker.withRegistry( '', DOCKER_CREDENTIALS ) {
                        shortCommit = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
                        dockerImage.push(shortCommit)
                    }
                }
            }
        }*/
    }
}