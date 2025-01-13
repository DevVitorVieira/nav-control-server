import mongoose, { Schema } from 'mongoose'

const keySchema = new Schema({
  value: {
    type: String
  },
  expiration-date: {
    type: String
  },
  max-connections: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

keySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      value: this.value,
      expiration-date: this.expiration-date,
      max-connections: this.max-connections,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Key', keySchema)

export const schema = model.schema
export default model
