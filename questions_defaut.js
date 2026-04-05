export const Questions = [
  {
    question: "Qu'est-ce que le Cloud Computing ?",
    answers: [
      "Un réseau de serveurs physiques installés dans votre entreprise",
      "La fourniture de ressources informatiques (serveurs, stockage, logiciels) via internet à la demande",
      "Un système d'exploitation développé par Microsoft",
    ],
    correct:
      "La fourniture de ressources informatiques (serveurs, stockage, logiciels) via internet à la demande",
  },
  {
    question: "Qu'est-ce que l'Infrastructure as Code (IaC) ?",
    answers: [
      "Un langage de programmation pour développer des applications Cloud",
      "La gestion et le provisionnement d'infrastructures via des fichiers de configuration plutôt que manuellement",
      "Un service Azure permettant de déployer des conteneurs",
    ],
    correct:
      "La gestion et le provisionnement d'infrastructures via des fichiers de configuration plutôt que manuellement",
  },
  {
    question: "Qu'est-ce que la scalabilité horizontale ?",
    answers: [
      "Augmenter la puissance (CPU, RAM) d'une instance existante",
      "Ajouter davantage d'instances identiques pour répartir la charge",
      "Réduire le nombre de serveurs en période creuse",
    ],
    correct: "Ajouter davantage d'instances identiques pour répartir la charge",
  },
  {
    question: "Qu'est-ce que Azure ?",
    answers: [
      "Un système d'exploitation de Microsoft",
      "Une plateforme de Cloud de Microsoft offrant plus de 200 services (calcul, stockage, IA, réseau…)",
      "Un outil de développement intégré comme Visual Studio",
    ],
    correct:
      "Une plateforme de Cloud de Microsoft offrant plus de 200 services (calcul, stockage, IA, réseau…)",
  },
  {
    question:
      "Dans l'organisation Azure, quel est l'ordre hiérarchique correct ?",
    answers: [
      "Tenant → Subscription → Groupe de ressources → Ressources",
      "Subscription → Tenant → Ressources → Groupe de ressources",
      "Groupe de ressources → Subscription → Tenant → Ressources",
    ],
    correct: "Tenant → Subscription → Groupe de ressources → Ressources",
  },
  {
    question: "Qu'est-ce qu'un groupe de ressources dans Azure ?",
    answers: [
      "Un conteneur logique qui regroupe des ressources Azure liées pour faciliter leur gestion et leur cycle de vie",
      "Un type d'abonnement Azure pour les équipes",
      "Un datacenter physique d'Azure",
    ],
    correct:
      "Un conteneur logique qui regroupe des ressources Azure liées pour faciliter leur gestion et leur cycle de vie",
  },
  {
    question: "Qu'est-ce qu'une région Azure ?",
    answers: [
      "Un ensemble de datacenters géographiquement proches reliés par un réseau à faible latence",
      "Un groupe de ressources Azure",
      "Un type d'abonnement Azure réservé à une zone géographique",
    ],
    correct:
      "Un ensemble de datacenters géographiquement proches reliés par un réseau à faible latence",
  },
  {
    question:
      "Qu'est-ce qu'une zone de disponibilité (Availability Zone) dans Azure ?",
    answers: [
      "Une région Azure réservée aux applications critiques",
      "Des datacenters physiquement séparés au sein d'une même région pour garantir la haute disponibilité",
      "Un service Azure de sauvegarde automatique",
    ],
    correct:
      "Des datacenters physiquement séparés au sein d'une même région pour garantir la haute disponibilité",
  },
  {
    question: "Qu'est-ce qu'Azure RBAC (Role-Based Access Control) ?",
    answers: [
      "Un service de sauvegarde des ressources Azure",
      "Un système de gestion des accès basé sur des rôles attribués aux utilisateurs pour contrôler ce qu'ils peuvent faire sur les ressources Azure",
      "Un outil de monitoring des performances Azure",
    ],
    correct:
      "Un système de gestion des accès basé sur des rôles attribués aux utilisateurs pour contrôler ce qu'ils peuvent faire sur les ressources Azure",
  },
  {
    question: "Pourquoi est-il recommandé de taguer ses ressources Azure ?",
    answers: [
      "Pour améliorer les performances des ressources",
      "Pour organiser, filtrer et suivre les coûts par projet, environnement ou équipe",
      "Pour sécuriser automatiquement les ressources contre les accès non autorisés",
    ],
    correct:
      "Pour organiser, filtrer et suivre les coûts par projet, environnement ou équipe",
  },
];
