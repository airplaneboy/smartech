import connectMongoose from '@/lib/mongooseConnect';
import Unit from '@/models/Unit';
import jsonResponse from '@/utils/jsonResponse';

export async function GET() {
  await connectMongoose();
  const units = await Unit.find({});
  if (!units) return jsonResponse({ error: 'There was an error' }, 'NOT_FOUND');

  return jsonResponse({ nbHits: units.length, units }, 'OK');
}

export async function POST(request: Request) {
  try {
    await connectMongoose();
    const body = await request.json();

    const { title, description, course } = body;

    if (!title || !description || !course)
      return jsonResponse({ error: 'Unit needs title, description, and course' }, 'BAD_REQUEST');

    if (await Unit.findOne({ title }))
      return jsonResponse({ error: 'Unit with same title already exists. Choose a different title' }, 'BAD_REQUEST');

    const unit = await Unit.create(body);

    return jsonResponse(unit, 'OK');
  } catch (error: any) {
    return jsonResponse({ error: error.message }, 'INTERNAL_SERVER_ERROR');
  }
}
