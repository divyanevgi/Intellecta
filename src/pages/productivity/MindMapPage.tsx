import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Plus, Minus, Save } from 'lucide-react';

interface Node {
  id: string;
  text: string;
  children: Node[];
  x: number;
  y: number;
}

const MindMapPage: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: '1',
      text: 'Main Topic',
      children: [
        {
          id: '2',
          text: 'Subtopic 1',
          children: [],
          x: 200,
          y: -100
        },
        {
          id: '3',
          text: 'Subtopic 2',
          children: [],
          x: 200,
          y: 100
        }
      ],
      x: 0,
      y: 0
    }
  ]);

  const addNode = (parentId: string) => {
    const newNode: Node = {
      id: Math.random().toString(),
      text: 'New Topic',
      children: [],
      x: 200,
      y: 0
    };

    setNodes(prevNodes => {
      const updateNodes = (nodes: Node[]): Node[] => {
        return nodes.map(node => {
          if (node.id === parentId) {
            return {
              ...node,
              children: [...node.children, newNode]
            };
          }
          return {
            ...node,
            children: updateNodes(node.children)
          };
        });
      };
      return updateNodes(prevNodes);
    });
  };

  const renderNode = (node: Node, depth: number = 0) => {
    return (
      <motion.div
        key={node.id}
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          transform: `translate(${node.x}px, ${node.y}px)`
        }}
      >
        <div className="absolute w-px h-full bg-gray-200 left-1/2 -z-10" />
        
        <div className="relative bg-white rounded-lg shadow-lg p-4 mb-4 w-40">
          <input
            type="text"
            value={node.text}
            onChange={(e) => {
              setNodes(prevNodes => {
                const updateNodes = (nodes: Node[]): Node[] => {
                  return nodes.map(n => {
                    if (n.id === node.id) {
                      return { ...n, text: e.target.value };
                    }
                    return {
                      ...n,
                      children: updateNodes(n.children)
                    };
                  });
                };
                return updateNodes(prevNodes);
              });
            }}
            className="w-full text-center border-none focus:ring-0"
          />
          
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
            <button
              onClick={() => addNode(node.id)}
              className="p-1 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              <Plus className="w-4 h-4" />
            </button>
            {depth > 0 && (
              <button
                onClick={() => {
                  setNodes(prevNodes => {
                    const removeNode = (nodes: Node[]): Node[] => {
                      return nodes.filter(n => {
                        if (n.id === node.id) return false;
                        n.children = removeNode(n.children);
                        return true;
                      });
                    };
                    return removeNode(prevNodes);
                  });
                }}
                className="p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
              >
                <Minus className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {node.children.length > 0 && (
          <div className="ml-20">
            {node.children.map(child => renderNode(child, depth + 1))}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Mind Map</h1>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Save className="w-5 h-5 mr-2" />
            Save Map
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 overflow-auto min-h-[600px]">
          <div className="flex justify-center">
            {nodes.map(node => renderNode(node))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MindMapPage;