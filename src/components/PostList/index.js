import React, { Component } from 'react';
import Post from '../Post/';
import './styles.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Luiz Fellipe",
          avatar: 'https://avatars3.githubusercontent.com/u/47944855?s=460&v=4'
        },
        date: "04 Jun 2019",
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4'
            },
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Ricardo Bessa',
          avatar: 'https://d1hlpam123zqko.cloudfront.net/192/279/642/30003001-1s51hnf-9dksadbqk5qti5p/original/Picttman14.jpg'
        },
        date: '04 Jun 2019',
        content: 'Fala Galera beleza ?\nalguém fazendo o bootcamp da rocketseat ?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '06 Jun 2019',
            content: 'Estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 3,
            author: {
              name: "Ricardo Bessa",
              avatar: "https://d1hlpam123zqko.cloudfront.net/192/279/642/30003001-1s51hnf-9dksadbqk5qti5p/original/Picttman14.jpg"
            },
            date: '04 Jun 2019',
            content: 'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '04 Jun 2019',
        content: 'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '05 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '05 Jun 2019',
            content:
              'Que maaaaaassa! '
          }
        ]
      }
    ]
  };

  render(){
    const {posts} = this.state;
    return(
      <div className="container-postlist">
        {posts.map(post => <Post key={post.id} data={post}/>)}
      </div>
    )
  }
}

export default PostList;