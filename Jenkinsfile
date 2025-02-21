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
        stage('Deploy') {
            steps {
                echo 'Deployment step (يمكنك تشغيل التطبيق هنا)'
                bat 'pm2 restart server.js'
            }
        }
    }
}
