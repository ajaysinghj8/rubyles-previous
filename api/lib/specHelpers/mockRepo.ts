var mockRepo = {
  items: <any>[],
  findAll: function(callback: any) { callback.call(null, mockRepo.items) }
}

export default mockRepo;
