'use strict';

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';


export default class FathersPromise extends Component {
  render() {
    return (
      <ScrollView
        style={styles.body}>
        <Text style={styles.title}>
          1. Jesus, the Baptizer in the Holy Spirit
        </Text>

        <Text style={styles.text}>
          John the Baptist said two things about Jesus:
        </Text>
        <Text style={styles.text}>
          The next day, he saw Jesus coming to him, and said, "Behold, <Text style={styles.italic}>the Lamb of God who takes away the sin of the world!</Text>" (John 1:29)
        </Text>
        <Text style={styles.text}>
          "I indeed baptize you in water for repentance, but he who comes after me is mightier than I, whose shoes I am not worthy to carry. <Text style={styles.italic}>He will baptize you in the Holy Spirit and with fire.</Text>" (Matthew 3:11)
        </Text>
        <Text style={styles.text}>
          We need to know Jesus in both these ways. If you are saved, you know Jesus as the Lamb of God who has taken your sin away and you will go to heaven when you die, but you also need to know Jesus as the Baptizer in the Holy Spirit.
        </Text>


        <Text style={styles.title}>
          2. The Father Promised the Holy Spirit
        </Text>

        <Text style={styles.text}>
          Jesus appeared to His disciples after His resurrection and instructed them to <Text style={styles.italic}>wait for the promise of the Father</Text>. The disciples were already saved, having put their faith in Jesus and believing in His death and resurrection, but the Father had something more for them.
        </Text>
        <Text style={styles.text}>
          Being assembled together with them, he commanded them, <Text style={styles.red}>"Don’t depart from Jerusalem, <Text style={styles.italic}>but wait for the promise of the Father</Text>, which you heard from me. For John indeed baptized in water, <Text style={styles.italic}>but you will be baptized in the Holy Spirit</Text> not many days from now."</Text> (Acts 1:4-5)
        </Text>
        <Text style={styles.text}>
          Jesus explained further, <Text style={styles.red}>"But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth."</Text> (Acts 1:8)
        </Text>


        <Text style={styles.title}>
          3.  It Happened Just As Jesus Said
        </Text>

        <Text style={styles.text}>
          Now when the day of Pentecost had come, they were all with one accord in one place. Suddenly there came from the sky a sound like the rushing of a mighty wind, and it filled all the house where they were sitting. Tongues like fire appeared and were distributed to them, and one sat on each of them. <Text style={styles.italic}>They were all filled with the Holy Spirit, and began to speak with other tongues</Text>, as the Spirit gave them the ability to speak. (Acts 2:1-4)
        </Text>

        <Text style={styles.text}>
          The Lord Jesus <Text style={styles.italic}>baptized</Text> them in the Holy Spirit and as a result they were all filled with the Holy Spirit and began to speak in tongues. This was new to them, but Jesus had told them, <Text style={styles.red}>“And these signs will accompany those who believe… they will speak with new tongues.”</Text> (Mark 16:17). It is good to know that the first time we hear about the concept of speaking in tongues, it came straight from the mouth of the Lord Jesus.
        </Text>


        <Text style={styles.title}>
          4. Laying on of Hands
        </Text>

        <Text style={styles.text}>
          Philip preached the Gospel in Samaria. Great miracles took place and many believed in Jesus and were baptized in water (Acts 8:4-25).
        </Text>
        <Text style={styles.text}>
          Now when the apostles who were at Jerusalem heard that Samaria had received the word of God, they sent Peter and John to them, who, when they had come down, <Text style={styles.italic}>prayed for them, that they might receive the Holy Spirit; for as yet he had fallen on none of them</Text>. They had only been baptized in the name of Christ Jesus. Then they laid their hands on them, and they received the Holy Spirit. (Acts 8:15-17)
        </Text>
        <Text style={styles.text}>
          Were the Samaritans saved? Yes, they believed in Jesus and were baptized in water. Had they received the Holy Spirit yet? No, the Holy Spirit had not yet fallen on any of them! How did they receive the Holy Spirit? Peter and John laid hands on them to receive the Holy Spirit. Can you see that it was a separate event from salvation?
        </Text>


        <Text style={styles.title}>
          5. Paul Received the Holy Spirit
        </Text>
        <Text style={styles.text}>
          Does the example of salvation first and then the baptism in the Holy Spirit repeat in the Book of Acts? Paul gets saved on the road to Damascus when Jesus appears to him. Entering Damascus, he is a very different man from the one who left Jerusalem ready to imprison and kill believers. Three days later the Lord sends an ordinary believer, Ananias, to lay hands on him to be filled with the Holy Spirit.
        </Text>
        <Text style={styles.text}>
          Ananias departed, and entered into the house. <Text style={styles.italic}>Laying his hands on him</Text>, he said, “Brother Saul, the Lord, who appeared to you on the road by which you came, has sent me, that you may receive your sight, and <Text style={styles.italic}>be filled with the Holy Spirit</Text>.” (Acts 9:17-19)
        </Text>
        <Text style={styles.text}>
          Note that although Paul had such a supernatural salvation experience, even hearing the Lord’s voice, he was not yet filled with the Holy Spirit! He only received the baptism in the Holy Spirit three days later when Ananias laid hands on him.
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  title: {
    fontSize: 18,

    marginTop: 20,
    marginRight: 20,
    marginBottom: 10,
    marginLeft: 20,
  },

  text: {
    fontSize: 14,

    marginRight: 20,
    marginBottom: 10,
    marginLeft: 20,
  },

  italic: {
    fontStyle: 'italic',
  },

  red: {
    color: 'red',
  },
});