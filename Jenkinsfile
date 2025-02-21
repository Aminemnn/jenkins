pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Aminemnn/jenkins.git'  
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Check PM2') {
            steps {
                bat 'pm2 -v'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment step'
                bat 'pm2 restart server || pm2 start server.js'
                bat 'pm2 list'
            }
        }
    }
}
